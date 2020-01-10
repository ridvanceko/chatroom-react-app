module.exports = function(sequelize, DataTypes) {
    var Group = sequelize.define("Group", {
      link: DataTypes.STRING
    });

    Group.associate = function(models) {
        Group.belongsTo(models.User, {
      });
    };
    return Group;
  };