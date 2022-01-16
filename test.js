import process from 'node:process';
import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	if (process.env.CI) {
		t.pass();
		return;
	}

	await execa('./cli.js');
	await execa('./cli.js', ['unicorn']);
	t.pass();
});
