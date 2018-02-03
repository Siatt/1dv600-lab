(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')
  let book = require('../dao/book')
  let book0 = book.book(0, 'The Hitchhikers Guide to the Galaxy', 'Douglas Adams', 'Science Fiction', 100, 1979, 'blablabla')
  let book1 = book.book(0, 'dasd', 'Douglas Adams', 'Science Fiction', 100, 1979, 'blablabla')
  let bookList = [book0, book1]
  module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
    callback(JSON.stringify(bookList))
  }
}())
