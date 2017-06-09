/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProfileParameter', {
    profileParameterId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'profileParameterId'
    },
    profileId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'profiles',
        key: 'profileId'
      },
      field: 'profileId'
    },
    assetId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'assets',
        key: 'assetId'
      },
      field: 'assetId'
    },
    parameter: {
      type: DataTypes.STRING(256),
      allowNull: false,
      field: 'parameter'
    },
    value: {
      type: DataTypes.STRING(256),
      allowNull: false,
      field: 'value'
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
    tableName: 'profilesParameters'
  });
};
