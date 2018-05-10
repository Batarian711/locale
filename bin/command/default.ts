import { Command, command, ExpectedError, option, Options as CliOptions, param, ValidatorFunction } from 'clime';
import { existsSync as fileExists } from 'fs';
import { join as pathJoin, resolve as pathResolve } from 'path';
import { cwd, stdout } from 'process';

import colours from '@bin/colours';

const validateFileExists: ValidatorFunction<string> = (value: string) => {
  if (!fileExists(value)) {
    throw new ExpectedError(`The module to load does not exist: '${value}'`);
  }
};

export class Options extends CliOptions {
  @option({
    flag: 'p',
    description: 'the provider module to use',
    default: pathJoin(__dirname, '..', 'provider', 'index.cjs'),
    validator: validateFileExists,
  })
  provider: string = '';  // tslint:disable-line:no-inferrable-types
  @option({
    flag: 'g',
    description: 'the generation module to use',
    default: pathJoin(__dirname, '..', 'generator', 'index.cjs'),
    validator: validateFileExists,
  })
  generator: string = '';  // tslint:disable-line:no-inferrable-types
}

@command({
  description: 'Command line interface for the EF chat bot framework',
})
export default class extends Command {
  async execute(
    @param({
      name: 'output',
      description: 'The output location to give to the generator',
      default: cwd(),
    })
    output: string,
    { provider, generator }: Options,
  ): Promise<void> {
    const { green: g, blue: b, reset: _ } = colours;
    const { default: providing } = require(pathResolve(provider));
    const { default: generating } = require(pathResolve(generator));
    const data = await providing();
    for await (const path of generating(output, data)) {
      stdout.write(`${g}Wrote '${b}${path}${g}'${_}\n`);
    }
  }
}
