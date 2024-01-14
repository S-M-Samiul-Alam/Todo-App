const { Sequelize, DataTypes } = require("sequelize");
const database = require("../database/db.js");

const Todo = database.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    dueDate: {
      type: DataTypes.DATE,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
  

  module.exports=Todo;