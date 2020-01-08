module.exports = function(sequelize, DataTypes) {
    var Photo = sequelize.define("Photo", {
      link: DataTypes.STRING
    });

    Photo.associate = function(models) {
        Photo.belongsTo(models.User, {
      });
    };
    return Photo;
  };