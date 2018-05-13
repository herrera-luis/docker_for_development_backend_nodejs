const server = require('./server');
const databaseService = require('./model/service/databaseService');

databaseService.sequelize.sync()
    .then(() => {
        server.listen('3000', () => {
            console.log('Application is running now');
        });
    })
    .catch((error) => {
        console.error('Error starting the database', error);
    });