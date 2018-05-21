const express = require('express');
const bodyParser = require('body-parser');
const apiController = require('./controllers/todoRoutesController');
const app = express();
const httpServer = require('http').createServer(app);

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});
app.use('/todos', apiController);

module.exports = httpServer;