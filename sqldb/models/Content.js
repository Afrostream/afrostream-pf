/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Content', {
    contentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'contentId'
    },
    uuid: {
      type: DataTypes.STRING(36),
      allowNull: false,
      field: 'uuid'
    },
    md5Hash: {
      type: DataTypes.STRING(32),
      allowNull: true,
      field: 'md5Hash'
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'filename'
    },
    state: {
      type: DataTypes.ENUM('initialized','scheduled','processing','packaging','ready','failed'),
      allowNull: true,
      defaultValue: 'initialized',
      field: 'state'
    },
    size: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'size'
    },
    duration: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'duration'
    },
    uspPackage: {
      type: DataTypes.ENUM('enabled','disabled'),
      allowNull: true,
      defaultValue: 'disabled',
      field: 'uspPackage'
    },
    drm: {
      type: DataTypes.ENUM('disabled','enabled'),
      allowNull: true,
      defaultValue: 'disabled',
      field: 'drm'
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
    tableName: 'contents'
  });
};
