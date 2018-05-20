const express = require('express');
const bodyParser = require('body-parser');
const apiController = require('./controllers/todoRoutesController');
const app = express();
const httpServer = require('http').createServer(app);

app.use(bodyParser.json());
app.use('/todos', apiController);

module.exports = httpServer;