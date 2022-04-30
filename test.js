import process from 'node:process';
import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	if (process.env.CI) {
		t.pass();
		return;
	}

	const fixture = 'unicorn';

	await execa('./cli.js');
	await execa('./cli.js', [fixture]);

	const {stdout} = await execa('./cli.js', ['--get']);
	t.is(stdout, fixture);
});
