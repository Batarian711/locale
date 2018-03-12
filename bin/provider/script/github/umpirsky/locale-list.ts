import fetch from '@bin/fetch';
import IData from '@bin/IData';
import Provider from '@bin/Provider';
import Script, { IOptions as IScript } from '@bin/Script';

function flatten(array: Array<IScript>, value: Array<IScript> | IScript): Array<IScript> {
  if (Array.isArray(value)) {
    return array.concat(value);
  } else {
    array.push(value);
    return array;
  }
}

function parse([locale, description]: [string, string]): Array<IScript> | IScript {
  const split = locale.split('_');
  const match = /\w+ \((\w+), \w+\)/.exec(description);

  if (split.length === 3 && match) {
    const value = split[1];
    const name = value.startsWith('Han') ? `Han ${match[1]}` : match[1];
    return { name, value };
  }

  return [];
}

const url = 'https://raw.githubusercontent.com/umpirsky/locale-list/master/data/en/locales.json';

const provider: Provider = async (): Promise<IData> => {
  const response = await fetch(url);
  const data = await response.json();
  const set = new Set<string>();
  const unique = ({ value }: IScript): boolean => {
    const seen = set.has(value);
    set.add(value);
    return !seen;
  };
  const script = Object.entries<string>(data).map(parse).reduce(flatten, []).filter(unique).map(s => new Script(s));
  return {
    iso639: {
      part1: []
    },
    iso3166: {
      part1: {
        alpha2: []
      }
    },
    script,
    locale: []
  };
};

export default provider;
