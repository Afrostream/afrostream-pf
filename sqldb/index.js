const Sequelize = require('sequelize');
const Helper = require('afrostream-node-sequelize-helper');
const fs = require('fs');

const config = rootRequire('config');

const db = {
  Sequelize: Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// building helper
db.helper = new Helper({sequelize: db.sequelize});
// loading models
db.models = db.helper.loadModelsFromDirectory(__dirname + '/models');
// loading associations
db.helper.associateModels(fs.readFileSync(__dirname + '/associations.md').toString());

// alias: access sqldb.* instead of sqldb.models.*
Object.keys(db.models).forEach(modelName => {
  db[modelName] = db.models[modelName];
});

module.exports = db;
