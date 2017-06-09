const development = require('./environment/development');
const production = require('./environment/production');

const env = process.env.NODE_ENV;

const config = {};

switch (env) {
  case 'development':
    Object.assign(config, development);
    break;
  case 'production':
    Object.assign(config, production);
    break;
    default:
    throw new Error('unknown env '+env);
}

config.env = env;

module.exports = config;
