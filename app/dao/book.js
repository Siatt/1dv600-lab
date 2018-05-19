/**
 * Module for CreateBook function
 *
 * @module book.js
 * @author Lucas Sjöqvist
 * @version 1.0.0
 */
exports.createBook = function (id, author, title, genre, price, published, description) {
  return {
    id: id,
    author: author,
    title: title,
    genre: genre,
    price: price,
    published: published,
    description: description
  }
}
