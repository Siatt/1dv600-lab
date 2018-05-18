'use strict'
let request = require('supertest')
let app = require('../app')
let helper = require('./helper_func/helper')
describe('Delete API test', () => {
  after(async function () {
    await helper.resetBooks()
  })
  it('Delete book from list', done => {
    request(app)
        .delete('/api/book/6')
        .expect('Content-Type', /json/)
        .expect('{}')
        .expect(200, done())
  })
})
