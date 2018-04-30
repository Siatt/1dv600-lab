(function () {
  'use strict'

  var fs = require('fs')

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
  var xml2js = require('xml2js')

    // Use this file to write and read the xml file.
  var LibraryDAO = {

        // Get the entire file from the file system.
    readXMLFile: function (callback) {
      let parser = new xml2js.Parser()
      fs.readFile('./books.xml', (err, data) => {
        if (err) console.log(err)
        parser.parseString(data, (err, result) => {
          if (err) console.log(err)
          callback(result.catalog.book)
        })
      })
    },

        // Write the entire file from the file system.
    writeXMLFile: function (data) {
      let builder = new xml2js.Builder()
      let xml = builder.buildObject(data)
      fs.writeFile('./books.xml', xml, err => {
        if (err) console.log(err)
      })
    }
  }

  module.exports = LibraryDAO
}())
