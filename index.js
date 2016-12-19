'use strict'

var toml = require('toml')

exports.name = 'toml'
exports.outputFormat = 'json'

exports.render = function (str, opts) {
  return JSON.stringify(toml.parse(str, opts), null, 2)
}
