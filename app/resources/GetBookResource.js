/**
 * Module for GetBook function
 *
 * @module GetBookResource.js
 * @author Lucas Sjöqvist
 * @version 1.0.0
 */
(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, callback) {
    let selectedBook
    LibraryDAO.readXMLFile(books => {
      // selectedBook = books.filter(book => book.id === id)
      books.forEach(current => {
        if (current.$.id === id) {
          selectedBook = current
        }
      })
      callback(JSON.stringify(selectedBook))
    })
  }
}())
