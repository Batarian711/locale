import { IImmutable as ILocale } from '@lib/ILocale';
import { kazakhstan, Kazakhstan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { kazakh, Kazakh } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Kazakh language spoken in Kazakhstan
 */
export interface IKkKz extends ILocale {
  language: Kazakh;
  region: Kazakhstan;
}

/**
 * The locale variable for the Kazakh language spoken in Kazakhstan
 */
export const kkKZ: IKkKz = {
  language: kazakh,
  region: kazakhstan,
};

Object.freeze(kkKZ);

export default kkKZ;
