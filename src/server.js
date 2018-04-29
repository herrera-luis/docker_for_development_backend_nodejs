const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/todoRoutes');
const app = express();
const httpServer = require('http').createServer(app);

app.use(bodyParser.json());
app.use('/todo', api);

module.exports = httpServer;