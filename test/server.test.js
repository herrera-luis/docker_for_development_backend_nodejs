const request = require('supertest');

const server = require('../src/server');
describe('running application', () => {
    let id;
    beforeEach(() => {
        server.listen();
        id = '593';
    });
    afterEach((done) => {
        server.close(done);
    });
    it('should response a GET request when the path is /todo', (done) => {
        request(server)
            .get('/todo')
            .expect(200, done);
    });
    it('should response a GET request with Id when the path is /todo', (done) => {
        request(server)
            .get(`/todo/${id}`)
            .expect(200, done)
    });
    it('should response a POST request with Object sent when the path is /todo', (done) => {
        const todo = {
            id: '593',
            title: 'title',
            done: false
        };
        request(server)
            .post('/todo')
            .send(todo)
            .expect(200, done);
    });
    it('should response a PUT request with Id when the path is /todo', (done) => {
        request(server)
            .put(`/todo/${id}`)
            .expect(200, done);
    });
    it('should response a DELETE request with Id when the path is /todo', (done) => {
        request(server)
            .delete(`/todo/${id}`)
            .expect(200, done);
    });
    it('should not response a request when the path is not /todo', (done) => {
        request(server)
            .get('/foo')
            .expect(404, done);
    });
});