module.exports = function(sequelize, DataTypes) {
    var Book = sequelize.define("Book", {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      synopsis: DataTypes.TEXT,
      date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
 
    return Book;
  };