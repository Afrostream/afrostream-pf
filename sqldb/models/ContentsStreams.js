/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ContentsStreams', {
    contentsStreamId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'contentsStreamId'
    },
    contentId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'contents',
        key: 'contentId'
      },
      field: 'contentId'
    },
    mapId: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      field: 'mapId'
    },
    type: {
      type: DataTypes.ENUM('video','audio','subtitles'),
      allowNull: false,
      field: 'type'
    },
    language: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      defaultValue: 'eng',
      field: 'language'
    },
    codec: {
      type: DataTypes.STRING(16),
      allowNull: false,
      field: 'codec'
    },
    codecInfo: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'codecInfo'
    },
    codecProfile: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'codecProfile'
    },
    bitrate: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'bitrate'
    },
    frequency: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'frequency'
    },
    width: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      field: 'width'
    },
    height: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      field: 'height'
    },
    fps: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      field: 'fps'
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
    tableName: 'contentsStreams'
  });
};
