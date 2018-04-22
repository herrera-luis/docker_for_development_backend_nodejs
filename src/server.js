const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);

app.get('/todo', (req, res) => {
    res.sendStatus(200);
});
app.get('/todo/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    res.sendStatus(200);
});
app.post('/todo', (req, res) => {
    res.sendStatus(200);
});
app.put('/todo/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    res.sendStatus(200);
});
app.delete('/todo/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    res.sendStatus(200);
});

module.exports = httpServer;