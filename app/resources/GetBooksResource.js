(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')
  let book = require('../dao/book')
  let bookList = []
  module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
    LibraryDAO.readXMLFile(function (books) {
      books.catalog.book.forEach(current => {
        let x = book.createBook(
          current.$.id,
          current.author,
          current.title,
          current.genre,
          current.price,
          current.publish_date,
          current.description
        )
        bookList.push(x)
      })
    })
    callback(JSON.stringify(bookList))
  }
}())
