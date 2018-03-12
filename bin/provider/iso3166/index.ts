import IData from '@bin/IData';
import Provider from '@bin/Provider';

import part1 from './part1';

const provider: Provider = async (): Promise<IData> =>
  ({
    iso639: {
      part1: []
    },
    iso3166: {
      part1: (await part1()).iso3166.part1
    },
    script: [],
    locale: []
  });

export default provider;
