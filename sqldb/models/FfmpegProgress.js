/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FfmpegProgress', {
    assetId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'assets',
        key: 'assetId'
      },
      field: 'assetId'
    },
    frame: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'frame'
    },
    fps: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'fps'
    },
    q: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'q'
    },
    size: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'size'
    },
    elapsed: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'elapsed'
    },
    bitrate: {
      type: DataTypes.FLOAT,
      allowNull: true,
      field: 'bitrate'
    }
  }, {
    tableName: 'ffmpegProgress'
  });
};
