# is-chakra [![Build Status](https://travis-ci.org/sindresorhus/is-chakra.svg?branch=master)](https://travis-ci.org/sindresorhus/is-chakra)

> Detect if your code is running in the [Chakra](http://en.wikipedia.org/wiki/Chakra_\(JScript_engine\)) JavaScript engine

Since Microsoft is prototyping [adding Chakra to Node.js](http://blogs.windows.com/buildingapps/2015/05/12/bringing-node-js-to-windows-10-iot-core/).


## Install

```
$ npm install --save is-chakra
```


## Usage

```js
var isChakra = require('is-chakra');

if (isChakra) {
	process.exit(666); // :p
}
```


## Related

- [chakra-nerp](https://github.com/sindresorhus/chakra-nerp) - Prevent your code from being run in the Chakra JavaScript engine


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
