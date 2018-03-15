import ILocale from '@lib/ILocale';
import { latvia, Latvia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { latvian, Latvian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Latvian language spoken in Latvia
 */
export interface ILvLv extends ILocale {
  language: Latvian;
  region: Latvia;
}

/**
 * The locale variable for the Latvian language spoken in Latvia
 */
export const lvLV: ILvLv = {
  language: latvian,
  region: latvia
};

export default lvLV;
