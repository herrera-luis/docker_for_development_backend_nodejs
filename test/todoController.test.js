const todoController = require('../src/controller/todoController');
const todos = require('../src/model/service/databaseService').todos;
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

describe('Todo controller', () => {
    let req;
    let res;
    beforeEach(() => {
        req = {
            body: {
                title: 'A title',
                done: false,
            },
            params: {
                todoId: '123'
            }
        };
        res = {
            status: () => {
            },
            send: () => {
            },
            sendStatus: () => {
            }
        };
    });
    it('should call findAll to getAllTodos', () => {
        chai.spy.on(todos, 'findAll', () => Promise.resolve());
        todoController.getAllTodos(req, res);
        expect(todos.findAll).to.have.been.called();
    });
    it('should call findById to getTodoById', () => {
        chai.spy.on(todos, 'findById', () => Promise.resolve());
        todoController.getTodoById(req, res);
        expect(todos.findById).to.have.been.called();
    });
    it('should call saveTodo to create', () => {
        chai.spy.on(todos, 'create', () => Promise.resolve());
        todoController.saveTodo(req, res);
        expect(todos.create).to.have.been.called();
    });
    it('should call deleteTodo to destroy', () => {
        chai.spy.on(todos, 'destroy', () => Promise.resolve());
        todoController.deleteTodo(req, res);
        expect(todos.destroy).to.have.been.called();
    });
});