/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Broadcaster', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
      field: 'name'
    },
    profileId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'profileId'
    }
  }, {
    tableName: 'broadcaster'
  });
};
