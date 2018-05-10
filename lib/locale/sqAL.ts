import { IImmutable as ILocale } from '@lib/ILocale';
import { albania, Albania } from '@lib/locale/Iso3166/Part1/Alpha2';
import { albanian, Albanian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Albanian language spoken in Albania
 */
export interface ISqAl extends ILocale {
  language: Albanian;
  region: Albania;
}

/**
 * The locale variable for the Albanian language spoken in Albania
 */
export const sqAL: ISqAl = {
  language: albanian,
  region: albania,
};

Object.freeze(sqAL);

export default sqAL;
