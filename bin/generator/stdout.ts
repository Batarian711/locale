import { stdout as stream } from 'process';

import Generator from '@bin/Generator';
import IData from '@bin/IData';
import Output from '@bin/Output';

import json from './json';

const generator: Generator = async function* stdout(_: Output, data: IData): AsyncIterableIterator<string> {
  yield* json(stream, data);
};

export default generator;
