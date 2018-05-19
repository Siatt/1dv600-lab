/**
 * Module for RemoveBook function
 *
 * @module RemoveBookResource.js
 * @author Lucas Sjöqvist
 * @version 1.0.0
 */
(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (id, callback) {
    LibraryDAO.readXMLFile(books => {
      let remain = books.filter(book => {
        return book.$.id !== id
      })
      let newList = {
        catalog: {
          book: remain
        }
      }
      LibraryDAO.writeXMLFile(newList, () => callback())
    })
  }
}())
