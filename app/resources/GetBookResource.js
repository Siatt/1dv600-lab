(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, callback) {
    LibraryDAO.readXMLFile(books => {
      let selectedBook = books.filter(book => book.id === id)
      callback(JSON.stringify(selectedBook))
    })
  }
}())
