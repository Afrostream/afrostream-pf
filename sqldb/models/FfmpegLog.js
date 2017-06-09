/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FfmpegLog', {
    assetId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'assets',
        key: 'assetId'
      },
      field: 'assetId'
    },
    log: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'log'
    }
  }, {
    tableName: 'ffmpegLogs'
  });
};
