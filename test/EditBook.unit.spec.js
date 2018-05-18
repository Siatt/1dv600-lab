'use strict'
'use strict'

let editBook = require('../app/resources/EditBookResource')
let expect = require('chai').expect
var LibraryDAO = require('../app/dao/LibraryDAO')
let helper = require('./helper_func/helper')

describe('Edit book unit test', () => {
  let originalBook
  before(async function () {
    await helper.getBooks().then(books => {
      originalBook = books[books.length - 1]
    })
  })
  after(async function () {
    await helper.resetBooks()
  })

  it('Edit book', async () => {
    let book
    await helper.getBooks().then(books => { book = books[books.length - 1] })
    editBook('10', {}, () => {
        LibraryDAO.readXMLFile(books => {
            expect(originalBook).to.not.deep.equal(books[9])
        })
    })
  })
})
