'use strict';
var test = require('ava');
var isChakra = require('./');

test(function (t) {
	t.assert(typeof isChakra === 'boolean');
	t.end();
});
