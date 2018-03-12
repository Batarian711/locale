import { stat } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

import fsWrite from '@bin/fs/write';
import Generator from '@bin/Generator';
import IData from '@bin/IData';
import Output from '@bin/Output';

const fileStatus = promisify(stat);

const generator: Generator = async function* json(output: Output, data: IData): AsyncIterableIterator<string> {
  if (typeof output === 'string') {
    try {
      const status = await fileStatus(output);
      // tslint:disable-next-line:no-parameter-reassignment
      if (status.isDirectory()) { output = join(output, 'ef-locale.json'); }
    } catch (error) {
      if (error.code !== 'ENOENT') { throw error; }
    }
  }
  await fsWrite(output, JSON.stringify(data));
  if (typeof output === 'string') { yield output; }
};

export default generator;
