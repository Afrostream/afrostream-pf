/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Profile', {
    profileId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'profileId'
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'name'
    },
    broadcaster: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'broadcaster'
    },
    acceptSubtitles: {
      type: DataTypes.ENUM('yes','no'),
      allowNull: false,
      defaultValue: 'no',
      field: 'acceptSubtitles'
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
    tableName: 'profiles'
  });
};
