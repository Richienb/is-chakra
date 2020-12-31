# is-chakra

> Detect if your code is running in the [Chakra](https://en.m.wikipedia.org/wiki/Chakra_(JavaScript_engine)) JavaScript engine

Since Microsoft is prototyping [adding Chakra to Node.js](http://blogs.windows.com/buildingapps/2015/05/12/bringing-node-js-to-windows-10-iot-core/).


## Install

```
$ npm install --save is-chakra
```


## Usage

```js
const isChakra = require('is-chakra');

if (isChakra) {
	console.log('Running in Chakra');
}
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
