var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      signUpDate: DataTypes.DATE,
      lastLogin: DataTypes.DATE
    },
    {
      hooks: {
        beforeCreate: user => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
      instanceMethods: {
        validPassword: function(password) {
          return bcrypt.compareSync(password, this.password);
        }
      }
    }
  );

  User.associate = function(models) {
    User.hasMany(models.Photo, {
      onDelete: "cascade"
    });
  };
  User.associate = function(models) {
    User.hasMany(models.Messages, {
      onDelete: "cascade"
    });
  };

  return User;
};

/*
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    googleId: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
    instanceMethods: {
      validPassword: function (password) {
        return bcrypt.compareSync(password, this.password);
      }
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Photo, {
      onDelete: "cascade"
    });
  };
  User.associate = function (models) {
    User.hasMany(models.Group, {
      onDelete: "cascade"
    });
  };

  return User;
};
*/
