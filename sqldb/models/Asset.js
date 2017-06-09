/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Asset', {
    assetId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    contentId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'contents',
        key: 'contentId'
      }
    },
    presetId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'presets',
        key: 'presetId'
      }
    },
    assetIdDependance: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    doAnalyze: {
      type: DataTypes.ENUM('yes','no'),
      allowNull: false,
      defaultValue: 'yes'
    },
    state: {
      type: DataTypes.ENUM('scheduled','processing','ready','failed'),
      allowNull: true,
      defaultValue: 'scheduled'
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'assets'
  });
};
