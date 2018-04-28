const express = require('express');
const api = express.Router();

api.get('/', (req, res) => {
    res.sendStatus(200);
});
api.get('/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    res.sendStatus(200);
});
api.post('/', (req, res) => {
    res.sendStatus(200);
});
api.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    res.sendStatus(200);
});
api.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    res.sendStatus(200);
});

module.exports = api;