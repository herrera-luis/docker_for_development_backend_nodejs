const Sequelize = require('sequelize');
const sequelize = new Sequelize('todosdb', 'postgres', 'mysecretpassword', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    operatorsAliases: false
});

const databaseService = {};

databaseService.Sequelize = Sequelize;
databaseService.sequelize = sequelize;

databaseService.todos = require('../entity/todo')(sequelize, Sequelize);

module.exports = databaseService;
