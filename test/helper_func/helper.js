'use strict'

let fs = require('fs')
let xml2js = require('xml2js')

let helper = {
  resetBooks: function () {
    let parser = new xml2js.Parser()
    fs.readFile('./test/helper_func/booksHelper.xml', (err, data) => {
      if (err) throw err
      let builder = new xml2js.Builder()
      parser.parseString(data, (err, result) => {
        if (err) throw err
        let xml = builder.buildObject(result)
        // console.log(xml)
        fs.writeFile('./books.xml', xml, err => {
          if (err) throw err
        })
      })
    })
  },

  bookLength: function () {
    return new Promise(resolve => {
      fs.readFile('./test/helper_func/booksHelper.xml', (err, data) => {
        if (err) throw err
        let parser = new xml2js.Parser()
        parser.parseString(data, (err, result) => {
          if (err) throw err
          resolve(result.catalog.book.length)
        })
      })
    })
  },

  getBooks: function () {
    return new Promise(resolve => {
      fs.readFile('./books.xml', (err, data) => {
        if (err) throw err

        let parser = new xml2js.Parser()
        parser.parseString(data, (err, result) => {
          if (err) throw err
          resolve(result.catalog.book)
        })
      })
    })
  }
}
module.exports = helper
