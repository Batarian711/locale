import { mkdir, stat, writeFile } from 'fs';
import { dirname } from 'path';
import { promisify } from 'util';

import Output from '@bin/Output';

const fileStatus = promisify(stat);
const fileWrite = promisify(writeFile);
const directoryCreate = promisify(mkdir);

function isWriteStream(output: Output): output is NodeJS.WriteStream {
  // tslint:disable-next-line:strict-type-predicates
  return typeof output === 'object' && (output as NodeJS.WriteStream).write !== undefined;
}

async function makeDirectory(path: string): Promise<void> {
  const stack: Array<string> = [];
  for (let current = path; current; current = dirname(current)) {
    try {
      const status = await fileStatus(current);
      if (status.isFile()) {
        throw new TypeError(`Cannot create a directory at '${path}' as '${current}' is a file`);
      }
      break;
    } catch (error) {
      if (error.code !== 'ENOENT') { throw error; }
      stack.unshift(current);
    }
  }

  for (const value of stack) {
    await directoryCreate(value);
  }
}

export default async function write(
  output: Output,
  data: any,  // tslint:disable-line:no-any
  options?: {
    encoding?: string | null;
    mode?: number | string;
    flag?: string;
  } | string | undefined | null): Promise<void> {
  if (typeof output === 'string') {
    try {
      await makeDirectory(dirname(output));
    } catch (error) {
      if (error.code !== 'EEXIST') { throw error; }
    }
  }
  if (isWriteStream(output)) {
    await promisify((output).write).bind(output)(data);
  } else {
    await fileWrite(output, data, options);
  }
}
