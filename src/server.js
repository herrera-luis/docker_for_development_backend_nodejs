const express = require('express');
const bodyParser = require('body-parser');
const apiController = require('./controller/todoRoutesController');
const app = express();
const httpServer = require('http').createServer(app);

app.use(bodyParser.json());
app.use('/todo', apiController);

module.exports = httpServer;