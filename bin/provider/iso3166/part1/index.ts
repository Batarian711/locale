import IData from '@bin/IData';
import Provider from '@bin/Provider';

import alpha2 from './alpha2';

const provider: Provider = async (): Promise<IData> =>
  ({
    iso639: {
      part1: []
    },
    iso3166: {
      part1: {
        alpha2: (await alpha2()).iso3166.part1.alpha2
      }
    },
    script: [],
    locale: []
  });

export default provider;
