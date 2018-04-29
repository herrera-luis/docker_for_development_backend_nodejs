const getAllTodos = (req, res) => {
    res.sendStatus(200);
};

const getTodoById = (req, res) => {
    const todoId = req.params.todoId;
    res.sendStatus(200);
};

const saveTodo = (req, res) => {
    res.sendStatus(200);
};

const updateTodo = (req, res) => {
    const todoId = req.params.todoId;
    res.sendStatus(200);
};

const deleteTodo = (req, res) => {
    const todoId = req.params.todoId;
    res.sendStatus(200);
};

module.exports = {
    getAllTodos,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodo
};