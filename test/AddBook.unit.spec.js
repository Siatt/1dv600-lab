'use strict'

let addBook = require('../app/resources/AddBookResource')
let expect = require('chai').expect
var LibraryDAO = require('../app/dao/LibraryDAO')
let helper = require('./helper_func/helper')
describe('Add book unit test', () => {
  let originalLength
  let mockObj = {
    title: 'test',
    author: 'test2',
    price: 'test3'
  }

  before(async function () {
    await helper.bookLength().then(result => {
      originalLength = result
    })
  })
  
//   after(function () {
//       helper.resetBooks()
//   })

  it('Adds book to list', () => {
    addBook(mockObj, () => {
      LibraryDAO.readXMLFile(books => {
        expect(originalLength).to.not.equal(books.length)
      })
    })
  })
})
