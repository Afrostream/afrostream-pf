/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Preset', {
    presetId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'presetId'
    },
    profileId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'profiles',
        key: 'profileId'
      },
      field: 'profileId'
    },
    presetIdDependance: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'presetIdDependance'
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      field: 'name'
    },
    type: {
      type: DataTypes.ENUM('ffmpeg','spumux','script'),
      allowNull: true,
      defaultValue: 'ffmpeg',
      field: 'type'
    },
    doAnalyze: {
      type: DataTypes.ENUM('yes','no'),
      allowNull: false,
      defaultValue: 'yes',
      field: 'doAnalyze'
    },
    cmdLine: {
      type: DataTypes.STRING(4096),
      allowNull: false,
      field: 'cmdLine'
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00',
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'updatedAt'
    }
  }, {
    tableName: 'presets'
  });
};
