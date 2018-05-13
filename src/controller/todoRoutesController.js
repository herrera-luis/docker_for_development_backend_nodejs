const express = require('express');
const apiRoute = express.Router();
const todoController = require('./todoController');

apiRoute.get('/', todoController.getAllTodos);
apiRoute.get('/:todoId', todoController.getTodoById);
apiRoute.post('/', todoController.saveTodo);
apiRoute.put('/:todoId', todoController.updateTodo);
apiRoute.delete('/:todoId', todoController.deleteTodo);

module.exports = apiRoute;