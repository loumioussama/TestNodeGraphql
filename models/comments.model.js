module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
      message: {
        type: Sequelize.STRING
      },
      userid: {
        type: Sequelize.INTEGER
      }
    });
  
    return Comment;
  };