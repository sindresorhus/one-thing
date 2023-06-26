import {promisify} from 'node:util';
import childProcess from 'node:child_process';

const execFile = promisify(childProcess.execFile);

const decodeUnicodeEscapes = string => string.replace(/\\u([\da-f]{4})/gi, (_, p1) => String.fromCodePoint(Number.parseInt(p1, 16)));

export default async function oneThing(text = '') {
	await execFile('open', ['--background', `one-thing:?text=${encodeURIComponent(text)}`]);
}

export async function getOneThing() {
	const {stdout} = await execFile('defaults', ['read', 'com.sindresorhus.One-Thing', 'text']);
	return decodeUnicodeEscapes(stdout.trim());
}
