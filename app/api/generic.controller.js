const sqldb = rootRequire('sqldb');
const mandatoryAssociations = new Map(); // empty.
const optionalAssociations = sqldb.helper.generateOptionalAssociations();

const Q = require('q');

module.exports.index = options => {
  const { Model } = options;

  return (req, res) => {
    Q()
    .then(() => {
      const qb = sqldb.helper.createQueryOptionsBuilder();

      const queryOptions = qb
        .setRootModel(Model)
        .setInitialQueryOptions({
          offset: req.query.offset || 0,
          limit: req.query.limit || 100
        })
        .populate(req.query.populate || '',  mandatoryAssociations, optionalAssociations)
        .getQueryOptions();

        return Model.findAndCountAll(queryOptions);
      })
      .then(result => {
        if (!Array.isArray(result.rows)) {
          const error = new Error('malformed result');
          error.statusCode = 500;
          throw error;
        }
        return result;
      })
      .then(o => { res.json(o); })
      .catch(res.handleError());
  };
};

module.exports.show = function (options) {
  const { Model } = options;

  // BEGIN FIXME: not safe & hacky
  let pkName = 'id';

  Model.describe().then(function (schema) {
    return Object.keys(schema).filter(function(field){
        return schema[field].primaryKey;
    });
  }).then(pk => {
    if (pk) {
      pkName = pk;
    }
  });
  // END FIXME.

  return (req, res) => {
    const qb = sqldb.helper.createQueryOptionsBuilder();
    const qoWhere = {};
    qoWhere[pkName] = req.params.id;

    const queryOptions = qb
      .setRootModel(Model)
      .setInitialQueryOptions({where:qoWhere})
      .populate(req.query.populate || '',  mandatoryAssociations, optionalAssociations)
      .getQueryOptions();

    Model.findOne(queryOptions)
      .then(entity => {
        if (!entity) {
          const error = new Error('not found');
          error.statusCode = 404;
          throw error;
        }
        return entity;
      })
      .then(res.json.bind(res))
      .catch(res.handleError());
  };
};
