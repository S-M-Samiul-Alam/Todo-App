const express = require("express");
const router = express.Router();
const todo_listController = require("../controller/todo_listController");

router.post("/add/", todo_listController.addTodo);
router.get("/get/", todo_listController.getTodo);
router.put("/updateTodo/:id", todo_listController.updateTodo);
router.delete("/deleteTodo/:id", todo_listController.deleteTodo);

module.exports = router;