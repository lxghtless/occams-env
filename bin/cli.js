#!/usr/bin/env node
'use strict';
const meow = require('meow');
const oe = require('../src');
const ocUtil = require('../src/oc-util');

const cli = meow(`
	$ oe --help
    Usage
	    Search for a key path in the oe configuration.
	    $ oe [keyPath]

	    Examples
	      $ oe home
	      /Users/awesome-dev
`);

(() => {
	const keyPath = cli.input[0];
	let value;

	if (!keyPath) {
		throw new TypeError('keyPath is required');
	}

	if (keyPath === '*') {
		value = oe.get();
	}

	if (!value) {
		value = oe.get(keyPath);
	}

	if (!value) {
		ocUtil.indexKeyPaths();
		value = ocUtil.searchKeyPaths(keyPath).join('\n');
		value = `search results:\n${value}`;
	}

	console.log(value);
})();
