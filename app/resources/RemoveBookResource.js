(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, callback) {
    LibraryDAO.readXMLFile(books => {
      let remain = books.catalog.book.filter(book => {
        return book.$.id !== id
      })
      let result = {
        catalog: {
          book: remain
        }
      }
      LibraryDAO.writeXMLFile(result, function () {
        callback()
      })
    })
  }
}())
