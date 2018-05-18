'use strict'
let request = require('supertest')
let app = require('../app')
let helper = require('./helper_func/helper')
describe('Add book API test', () => {
  
  after(async function () {
    helper.resetBooks()
  })

  it('Adds book', async done => {
    request(app)
        .put('/api/books')
        .expect('{}')
        .expect('Content-Type', /json/)
        .expect(200, done)
  })
})
