'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('AssetsStreams', {
    assetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    mapId: DataTypes.INTEGER(6),
    type: DataTypes.ENUM('video','audio','subtitles'),
    language: {
      type: DataTypes.STRING(3),
      default: 'eng'
    },
    codec: DataTypes.STRING(16),
    codecInfo: DataTypes.STRING(32),
    codecProfile: DataTypes.STRING(32),
    bitrate: DataTypes.INTEGER(11),
    frequency: DataTypes.INTEGER(11),
    width: DataTypes.INTEGER(6),
    height: DataTypes.INTEGER(6),
    fps: DataTypes.INTEGER(6)
  });
};
