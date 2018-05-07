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

const Todo = sequelize.define('todo', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    topic: Sequelize.STRING,
    done: Sequelize.BOOLEAN
});

const getAllTodos = (req, res) => {
    Todo.findAll()
        .then((allTodos) => {
            res.status(200).send(allTodos);
        })
        .catch((error) => {
            console.error('Error doing the query to database', error);
            res.status(404);
        });
};

const getTodoById = (req, res) => {
    const todoId = req.params.todoId;
    Todo.findById(todoId)
        .then((todo) => {
            res.status(200).send(todo);
        })
        .catch((error) => {
            console.error('Error doing the query to database', error);
            res.status(404);
        });
};

const saveTodo = (req, res) => {
    const newTodo = {
        topic: req.body.topic,
        done: req.body.done
    };

    sequelize.sync()
        .then(() => {
            return Todo.create(newTodo);
        })
        .then(todoCreated => {
            console.log(todoCreated.toJSON());
            res.sendStatus(200);
        }).catch((error) => {
        console.error('Error doing the query to database', error);
        res.status(404);
    });
};

const updateTodo = (req, res) => {
    const todoId = req.params.todoId;
    const upgradeableTopic = req.body.topic;
    const upgradeableDone = req.body.done;
    const upgradeableTodo = {};
    if(upgradeableTopic) {
        upgradeableTodo.topic = upgradeableTopic;
    }
    if(upgradeableDone) {
        upgradeableTodo.done = upgradeableDone;
    }
    if(upgradeableTodo !== {}) {
        Todo.findById(todoId)
            .then((todo) => {
                todo.updateAttributes(upgradeableTodo).then(() => {
                    res.sendStatus(200);
                });
            }).catch((error) => {
                console.error('Error doing the query to database', error);
                res.status(404);
            });
    } else {
        res.sendStatus(200);
    }
};

const deleteTodo = (req, res) => {
    const todoId = req.params.todoId;
    Todo.destroy({
        where: { id: todoId }
    }).then((deletedCode) => {
        console.log('deletedCode', deletedCode);
        res.sendStatus(200);
    }).catch((error) => {
        console.error('Error doing the query to database', error);
        res.status(404);
    });
};

module.exports = {
    getAllTodos,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodo
};