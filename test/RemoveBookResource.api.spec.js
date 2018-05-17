'use strict'
let request = require('supertest')
let app = require('../app')

describe('Delete API test', () => {
    it('Delete book from list', done => {
        request(app)
            .delete('/api/book/6')
            .expect('Content-Type', /json/)
            .expect('{}')
            .expect(200, done())            
    })
    it('Cant remove non existent book', done => {
        request(app)
            .delete('/api/books/11')
            .expect(404)
            .end(done())
    })
})