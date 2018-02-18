(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, callback) {
    LibraryDAO.readXMLFile(books => {
      let remain = books.filter(book => {
        return books.catalog.book.book.$.id !== id
      })
      LibraryDAO.writeXMLFile(remain, function () {
        callback()
      })
    })
  }
}())
