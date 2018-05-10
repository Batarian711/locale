import fetch from '@bin/fetch';
import IData from '@bin/IData';
import Alpha2, { IOptions as IAlpha2 } from '@bin/Iso3166/Part1/Alpha2';
import Provider from '@bin/Provider';

interface IJson {
  ['alpha-2']: string;
  name: string;
}

function flatten(array: Array<IAlpha2>, value: Array<IAlpha2> | IAlpha2): Array<IAlpha2> {
  if (Array.isArray(value)) {
    return array.concat(value);
  } else {
    array.push(value);
    return array;
  }
}

const prefixRegExp = /^(.+) \((.+)\)$/;
const duplicates: ReadonlySet<string> = new Set<string>(['Virgin Islands', 'Congo', 'Korea']);

function parse(json: IJson): Array<IAlpha2> | IAlpha2 {
  const { name, ['alpha-2']: value } = json;

  const names = [name.replace('(U.S.)', '(United States)').trim().replace(`'`, '')];

  // Process prefixes
  const matches = prefixRegExp.exec(names[0]);
  if (matches) {
    names[0] = matches[1];
    names[1] = `${matches[2]} ${matches[1]}`;
    names.length = 2;
  }

  // Special handling of the Falkland Islands due to the sovereignty dispute (Malvinas is not a prefix)
  if (names.some(n => n.includes('(Malvinas)'))) {
    names[0] = 'Falkland Islands (Malvinas)';
    names[1] = 'Falkland Islands';
    names.length = 2;
  }

  // Remove duplicates
  if (duplicates.has(names[0]) && names.length > 1) {
    names.shift();
  }

  return names.map(n => ({ name: n, value }));
}

const url = 'https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/slim-2/slim-2.json';

const provider: Provider = async (): Promise<IData> => {
  const response = await fetch(url);
  const data = await response.json();
  const alpha2 = Object.values<IJson>(data).map(parse).reduce(flatten, []).map(o => new Alpha2(o));
  return {
    iso639: {
      part1: [],
    },
    iso3166: {
      part1: {
        alpha2,
      },
    },
    script: [],
    locale: [],
  };
};

export default provider;
