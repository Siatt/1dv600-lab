function book (id, title, author, genre, price, published, description) {
  return {
    id: id,
    title: title,
    author: author,
    genre: genre,
    price: price,
    published: published,
    description: description
  }
}
module.exports.book = book
