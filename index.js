import {promisify} from 'node:util';
import childProcess from 'node:child_process';

const execFile = promisify(childProcess.execFile);

export default async function oneThing(text = '') {
	await execFile('open', ['--background', `one-thing:?text=${encodeURIComponent(text)}`]);
}

export async function getOneThing() {
	const {stdout} = await execFile('defaults', ['read', 'com.sindresorhus.One-Thing', 'text']);
	return stdout.trim();
}
