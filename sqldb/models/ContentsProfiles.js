/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ContentsProfiles', {
    contentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'contents',
        key: 'contentId'
      },
      field: 'contentId'
    },
    profileId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'profileId'
    }
  }, {
    tableName: 'contentsProfiles'
  });
};
