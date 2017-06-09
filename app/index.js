const AfrostreamNodeApp = require('afrostream-node-app');
const config = rootRequire('config');

const sqldb = rootRequire('sqldb');

const app = AfrostreamNodeApp.create({basicAuth: config.basicAuth, views: __dirname + '/views'});

// additionnal middlewares
app.use(require('./middleware/error.js')());

// routes
app.use('/api', require('./api'));
app.use('/', (req, res) => res.render('index.html'));

sqldb.sequelize
  .authenticate()
  .then(() => {
    console.log('DB connection has been established successfully.');

    app.listen(config.port, config.ip, () => {
      console.log(`Express server listening on ${config.port} in ${process.env.NODE_ENV} mode`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app;
