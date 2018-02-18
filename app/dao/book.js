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
