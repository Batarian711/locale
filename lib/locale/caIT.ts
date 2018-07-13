import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { italy, Italy } from '@lib/locale/Iso3166/Part1/Alpha2';
import { catalan, Catalan } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Catalan language spoken in Italy
 */
export interface ICaIt extends ILocale {
  language: Catalan;
  region: Italy;
}

/**
 * The locale variable for the Catalan language spoken in Italy
 */
export const caIT: ICaIt = {
  language: catalan,
  region: italy,
};

freeze(caIT);

export default caIT;
