let expect = require('chai').expect
let editBook = require('../app/resources/EditBookResource')
let result
describe('Edit book function', () => {
    it('Edit book implemented', () => { expect(editBook()).equal(true) })
})