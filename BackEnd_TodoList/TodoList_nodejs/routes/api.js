const express = require("express");
const app = express();


const todo_list=require("./todo_list-route");
const authRoutes = require('./auth-route');



app.use('/auth', authRoutes);
app.use('/todos', todo_list);

module.exports = app;
