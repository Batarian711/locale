import fetch from '@bin/fetch';
import IData from '@bin/IData';
import ILocale from '@bin/ILocale';
import Provider from '@bin/Provider';

function flatten(array: Array<ILocale>, value: Array<ILocale> | ILocale): Array<ILocale> {
  if (Array.isArray(value)) {
    return array.concat(value);
  } else {
    array.push(value);
    return array;
  }
}

function parse(locale: string): Array<ILocale> | ILocale {
  const split = locale.split('_');

  switch (split.length) {
    case 1: return { language: split[0] };
    case 2: return /^[A-Z]{2}$/.test(split[1]) ?
      { language: split[0], region: split[1] } : { language: split[0], script: split[1] };
    case 3: return { language: split[0], region: split[2], script: split[1] };
    default: return [];
  }
}

const url = 'https://raw.githubusercontent.com/umpirsky/locale-list/master/data/en/locales.json';

const provider: Provider = async (): Promise<IData> => {
  const response = await fetch(url);
  const data = await response.json();
  const locale = Object.keys(data).map(parse).reduce(flatten, []);
  return {
    iso639: {
      part1: []
    },
    iso3166: {
      part1: {
        alpha2: []
      }
    },
    script: [],
    locale
  };
};

export default provider;
