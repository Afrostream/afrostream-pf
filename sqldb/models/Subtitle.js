/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Subtitle', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    contentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'contentId'
    },
    lang: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      field: 'lang'
    },
    url: {
      type: DataTypes.STRING(2048),
      allowNull: false,
      field: 'url'
    }
  }, {
    tableName: 'subtitles'
  });
};
