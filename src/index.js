const server = require('./server');
const databaseService = require('./models/database/postgresService');

databaseService.sequelize.sync()
    .then(() => {
        server.listen('3000', () => {
            console.log('Application is running now');
        });
    })
    .catch((error) => {
        console.error('Error starting the database', error);
    });