import {readdir} from 'node:fs/promises'

const currentDir = process.cwd();
const files = await readdir(currentDir);

console.log(files);