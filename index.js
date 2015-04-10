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

exports.name = 'toml';
exports.inputFormats = ['toml', 'ini'];
exports.outputFormat = 'json';

exports.render = function _render(str, opts) {
  return JSON.stringify(toml.parse(str, opts));
};
