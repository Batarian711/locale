import IData from '@bin/IData';
import Provider from '@bin/Provider';

import iso3166 from '@bin/provider/iso3166';
import iso639 from '@bin/provider/iso639';
import locale from '@bin/provider/locale';
import script from '@bin/provider/script';

const provider: Provider = async (): Promise<IData> =>
  ({
    iso639: (await iso639()).iso639,
    iso3166: (await iso3166()).iso3166,
    script: (await script()).script,
    locale: (await locale()).locale,
  });

export default provider;
