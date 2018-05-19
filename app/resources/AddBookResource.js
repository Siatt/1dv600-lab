/**
 * Module for AddBook function
 *
 * @module AddBookResource.js
 * @author Lucas Sjöqvist
 * @version 1.0.0
 */
(function () {
  'use strict'

  var LibraryDAO = require('../dao/LibraryDAO')

  module.exports = function (data, callback) {
    LibraryDAO.readXMLFile(books => {
        // Get last book for id
      let lastBook = books[books.length - 1]
      let id = parseInt(lastBook.$.id) + 1

      let bookToAdd = {
        '$': {id: id},
        title: data.title,
        author: data.author,
        genre: data.genre,
        price: data.price,
        published_date: data.published_date,
        description: data.description
      }

      books.push(bookToAdd)
      let newList = {
        catalog: {
          book: books
        }
      }
      LibraryDAO.writeXMLFile(newList, function () {
        callback()
      })
    })
  }
}())
