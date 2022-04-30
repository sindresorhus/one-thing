#!/usr/bin/env node
import meow from 'meow';
import oneThing, {getOneThing} from './index.js';

const cli = meow(`
	Usage
	  $ one-thing <text>
	  $ one-thing --get

	Example
	  $ one-thing 'Prepare for important meeting'
`, {
	importMeta: import.meta,
	flags: {
		get: {
			type: 'boolean',
		},
	},
});

const [text] = cli.input;

(async () => {
	if (cli.flags.get) {
		console.log(await getOneThing(text));
	} else {
		await oneThing(text);
	}
})();
