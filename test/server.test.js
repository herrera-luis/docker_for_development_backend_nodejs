const request = require('supertest');
const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const databaseService = require('../src/model/service/databaseService');

const server = require('../src/server');
xdescribe('Running API', () => {
    let id;
    before(() => {
        id = '593';
        server.listen();
    });
    afterEach((done) => {
        server.close(done);
    });
    it('should response a GET request when the path is /todos', (done) => {
        request(server)
            .get('/todos')
            .expect(200, done);
    });
    it('should response a GET request with Id when the path is /todos', (done) => {
        request(server)
            .get(`/todos/${id}`)
            .expect(200, done)
    });
    it('should response a POST request with Object sent when the path is /todos', (done) => {
        const todo = {
            id: '593',
            title: 'title',
            done: false
        };
        request(server)
            .post('/todos')
            .send(todo)
            .expect(200, done);
    });
    it('should response a PUT request with Id when the path is /todos', (done) => {
        request(server)
            .put(`/todos/${id}`)
            .expect(200, done);
    });
    it('should response a DELETE request with Id when the path is /todos', (done) => {
        request(server)
            .delete(`/todos/${id}`)
            .expect(200, done);
    });
    it('should not response a request when the path is not /todos', (done) => {
        request(server)
            .get('/foo')
            .expect(404, done);
    });
});