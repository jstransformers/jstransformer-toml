/**
 * jstransformer-toml <https://github.com/jstransformers/jstransformer-toml>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var toml = require('toml');
var bluebird = require('bluebird');
var readFile = bluebird.promisify(fs.readFile);
var readFileSync = fs.readFileSync;

exports.name = 'toml';
exports.outputFormat = 'json';

exports.render = function _render(str, opts) {
  return toml.parse(str, opts);
};
exports.renderFile = function _renderFile(filepath, opts) {
  var input = readFileSync(filepath, 'utf8');
  return toml.parse(input, opts);
};
exports.renderFileAsync = function _renderFileAsync(filepath, opts) {
  return readFile(filepath, 'utf8').then(function(data) {
    return toml.parse(data, opts);
  });
};
