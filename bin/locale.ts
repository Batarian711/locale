// tslint:disable-next-line:no-any
(Symbol as any).asyncIterator = Symbol.asyncIterator || Symbol.for('@@asyncIterator');

import { CLI as Cli, Shim } from 'clime';
import { join } from 'path';

const cli = new Cli('ef-locale', join(__dirname, 'command'));
const shim = new Shim(cli);
shim.execute(process.argv);
