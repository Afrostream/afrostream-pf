'use strict';

import Sequelize from 'sequelize';
import config from '../config';

const db = {
  Sequelize: Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

db.ExportsBouygues = db.sequelize.import('models/exportsBouygues');

export default db;