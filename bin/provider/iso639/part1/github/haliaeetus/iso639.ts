import fetch from '@bin/fetch';
import IData from '@bin/IData';
import Iso639 from '@bin/Iso639';
import { IOptions as IPart1 } from '@bin/Iso639/Part1';
import Provider from '@bin/Provider';

interface IJson {
  ['639-1']: string;
  name: string;
}

function flatten(array: Array<IPart1>, value: Array<IPart1> | IPart1): Array<IPart1> {
  if (Array.isArray(value)) {
    return array.concat(value);
  } else {
    array.push(value);
    return array;
  }
}

function parse(json: IJson): Array<IPart1> | IPart1 {
  const { name, ['639-1']: value } = json;

  // Strip out any brackets, such as '(Eastern) Punjabi'
  const stripped = name.replace(/\([^)]+\)/, '').trim();

  // Split on commas, which are variants of the country code name
  const names = stripped.split(',').map(s => s.trim());

  if (!names.length || names.some(n => !n)) {
    throw TypeError(`Failed to sanitize '${value}'`);
  }

  // Specific handling for Tonga as it clashes with the country and is *actually* the *Tongan* language
  names.forEach((v, i, a) => {
    if (v === 'Tonga') {
      a[i] = 'Tongan';
    }
  });

  return names.map(n => ({ name: n, value }));
}

const url = 'https://raw.githubusercontent.com/haliaeetus/iso-639/master/data/iso_639-1.json';

const provider: Provider = async (): Promise<IData> => {
  const response = await fetch(url);
  const data = await response.json();
  const part1 = Object.values<IJson>(data).map(parse).reduce(flatten, []);
  return {
    iso639: new Iso639({ part1 }),
    iso3166: {
      part1: {
        alpha2: []
      }
    },
    script: [],
    locale: []
  };
};

export default provider;
