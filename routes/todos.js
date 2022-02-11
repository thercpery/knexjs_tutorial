const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos");

// Get all todos
router.get("/", todosController.getAllTodos);

// Get all finished todos
router.get("/finished", todosController.getAllFinishedTodos);

// Get one todo by ID
router.get("/:id", todosController.getTodoById);

// Create a todo
router.post("/", todosController.createTodo);

// Update a todo
router.put("/:id", todosController.updateTodo);

// Finish a todo
router.patch("/:id", todosController.completeTodo);

// Delete a todo
router.delete("/:id", todosController.deleteTodo);

module.exports = router;