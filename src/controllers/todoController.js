const databaseService = require('../models/database/postgresService');

const getAllTodos = (req, res) => {
    databaseService.todos.findAll()
        .then(allTodos => {
            res.status(200);
            res.send(allTodos);
        })
        .catch(error => {
            console.error('Error doing the query to database', error);
            res.status(404);
        });
};

const getTodoById = (req, res) => {
    const todoId = req.params.todoId;
    databaseService.todos.findById(todoId)
        .then(todo => {
            res.status(200);
            res.send(todo);
        })
        .catch(error => {
            console.error('Error doing the query to database', error);
            res.status(404);
        });
};

const saveTodo = (req, res) => {
    const newTodo = {
        title: req.body.title,
        done: req.body.done
    };

    databaseService.todos.create(newTodo)
        .then(() => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.error('Error doing the query to database', error);
            res.status(404);
        });
};

const updateTodo = (req, res) => {
    const todoId = req.params.todoId;
    const upgradeableTitle = req.body.title;
    const upgradeableDone = req.body.done;
    const upgradeableTodo = {};
    if (upgradeableTitle) {
        upgradeableTodo.title = upgradeableTitle;
    }
    if (upgradeableDone) {
        upgradeableTodo.done = upgradeableDone;
    }
    if (upgradeableTodo !== {}) {
        databaseService.todos.findById(todoId)
            .then(todo => {
                todo.updateAttributes(upgradeableTodo)
                    .then(() => {
                        res.sendStatus(200);
                    })
                    .catch(error => {
                        console.error('Error doing the query to database', error);
                        res.status(404);
                    });
            })
            .catch(error => {
                console.error('Error doing the query to database', error);
                res.status(404);
            });
    } else {
        res.sendStatus(200);
    }
};

const deleteTodo = (req, res) => {
    const todoId = req.params.todoId;
    databaseService.todos.destroy({
        where: {
            id: todoId
        }
    }).then(() => {
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