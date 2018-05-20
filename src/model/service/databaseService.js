const Sequelize = require('sequelize');

const database = process.env.POSTGRES_DB;
const user = process.env.POSTGRES_USER;
const pass = process.env.POSTGRES_PASSWORD;
const serverName = process.env.POSTGRES_SERVERNAME;

function isADockerServer() {
    return process.env.ENV === 'docker';
}

const sequelize = new Sequelize(database, user, pass, {
    host: isADockerServer() ? serverName : 'localhost',
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