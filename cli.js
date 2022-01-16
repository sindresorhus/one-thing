#!/usr/bin/env node
import meow from 'meow';
import oneThing from './api.js';

const cli = meow(`
	Usage
	  $ one-thing <text>

	Example
	  $ one-thing 'Prepare for important meeting'
`, {
	importMeta: import.meta,
});

const [text] = cli.input;

(async () => {
	await oneThing(text);
})();
