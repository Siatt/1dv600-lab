let expect = require('chai').expect
let book = require('../app/dao/book')
let result
describe('Create new book test', () => {
  it('Book is of type object', () => {
    result = book.createBook()
    expect(typeof result).to.equal('object')
  })
  it('Should return correct keys in object', () => {
    result = book.createBook()
    let expected = {
      id: null,
      author: null,
      title: null,
      genre: null,
      price: null,
      published: null,
      description: null
    }
    expect(result).to.not.deep.equals(expected)
  })
})
