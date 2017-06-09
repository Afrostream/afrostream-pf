/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Encoder', {
    encoderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'encoderId'
    },
    hostname: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true,
      field: 'hostname'
    },
    activeTasks: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '0',
      field: 'activeTasks'
    },
    maxTasks: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '1',
      field: 'maxTasks'
    },
    load1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0',
      field: 'load1'
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'updatedAt'
    }
  }, {
    tableName: 'encoders'
  });
};
