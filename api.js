import {promisify} from 'node:util';
import childProcess from 'node:child_process';

const execFile = promisify(childProcess.execFile);

export default async function oneThing(text = '') {
	await execFile('open', ['--background', `one-thing:?text=${encodeURIComponent(text)}`]);
}
