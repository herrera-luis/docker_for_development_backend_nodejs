module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define(
        'todo', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title: Sequelize.STRING,
            done: Sequelize.BOOLEAN
        }
    );
    return Todo;
};