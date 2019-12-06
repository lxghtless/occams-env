#!/usr/bin/env node
'use strict';
const meow = require('meow');
const occamsEnv = require('../src');

const cli = meow(`
	Usage
	  $ occams-env [input]

	Examples
	  $ occams-env home
	  /Users/{CURRENT_USER_NAME}
`);

console.log(occamsEnv.get(cli.input[0]));
