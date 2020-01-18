module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define("Messages", {
    sender: DataTypes.STRING,
    conversationId: DataTypes.STRING,
    message: DataTypes.TEXT,
    timeSent: DataTypes.DATETIME,
    isRead: DataTypes.BOOLEAN

  });

  return Messages;
};