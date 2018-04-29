const express = require('express');
const apiRoute = express.Router();
const todoCtrl = require('../controllers/todoCtrl');

apiRoute.get('/', todoCtrl.getAllTodos);
apiRoute.get('/:todoId', todoCtrl.getTodoById);
apiRoute.post('/', todoCtrl.saveTodo);
apiRoute.put('/:todoId', todoCtrl.updateTodo);
apiRoute.delete('/:todoId', todoCtrl.deleteTodo);

module.exports = apiRoute;