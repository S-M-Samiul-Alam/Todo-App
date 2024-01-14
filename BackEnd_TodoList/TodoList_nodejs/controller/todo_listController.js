const Todo = require("../model/todo_list-info-model");


// Create a new Todo
exports.addTodo=async (req, res) => {
    const { title, description, dueDate } = req.body;
    const todo = await Todo.create({ title, description, dueDate });
    res.json(todo);
  }


// Get all Todo
exports.getTodo=async (req, res) => {
    const todos = await Todo.findAll();
    res.json(todos);
  };

// Update a Todo
exports.updateTodo=async (req, res) => {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
      todo.completed = !todo.completed;
      await todo.save();
      res.json(todo);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  }

// Delete a Todo
exports.deleteTodo=async (req, res) => {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
      await todo.destroy();
      res.json({ message: 'Todo deleted successfully' });
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } 