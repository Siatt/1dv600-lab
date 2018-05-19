/**
 * Module for EditBook function
 *
 * @module EditBookResource.js
 * @author Lucas Sjöqvist
 * @version 1.0.0
 */
(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, data, callback) {
    LibraryDAO.readXMLFile(books => {
      books.forEach(book => {
        if (book.$.id === id) {
          book.author = data.author
          book.title = data.title
          book.genre = data.genre
          book.price = data.price
          book.published = data.published
          book.description = data.description
        }
      })
      let updatedList = {
        catalog: {
          book: books
        }
      }
      LibraryDAO.writeXMLFile(updatedList, callback)
    })
  }
}())
