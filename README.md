# jstransforer-toml

[TOML](https://github.com/BinaryMuse/toml-node) support for JSTransformers.

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-toml/master.svg)](https://travis-ci.org/jstransformers/jstransformer-toml)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-toml/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-toml)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-toml/master.svg)](http://david-dm.org/jstransformers/jstransformer-toml)
[![NPM version](https://img.shields.io/npm/v/jstransformer-toml.svg)](https://www.npmjs.org/package/jstransformer-toml)

## Installation

    npm install jstransformer-toml

## API

```js
var toml = require('jstransformer')(require('jstransformer-toml'));
var opts = {};

var result = toml.render('[toml]\nbar = "baz"\nqux = true', opts);

console.log(JSON.parse(result).body)
//=> '{"toml": {"bar": "baz", "qux": true}}'

var promise = toml.renderFileAsync('./path/to/config.toml', opts);
promise.then(function(data) {
  console.log(JSON.parse(result).body);
  //=> '{"toml": {"bar": "baz", "qux": true}}'
});
```

## License

MIT
