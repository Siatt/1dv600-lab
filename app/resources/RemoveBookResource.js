(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, callback) {
    LibraryDAO.readXMLFile(books => {
      console.log(books)
      let remain = books.filter(book => {
        return book.$.id !== id
      })
      let newList = {
        catalog: {
          book: remain
        }
      }
      LibraryDAO.writeXMLFile(newList, callback)
    })
  }
}())
