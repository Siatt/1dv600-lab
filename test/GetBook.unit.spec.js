'use strict'
let expect = require('chai').expect
let getBook = require('../app/resources/GetBookResource')
var LibraryDAO = require('../app/dao/LibraryDAO')
describe('Get book unit test', () => {
  let test
  it('Get right book with id', () => {
    getBook('9', book => {
      expect(JSON.parse(book).title).to.equal('Think and Grow Rich')
    })
  })
})
