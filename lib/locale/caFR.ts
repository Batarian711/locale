import { IImmutable as ILocale } from '@lib/ILocale';
import { france, France } from '@lib/locale/Iso3166/Part1/Alpha2';
import { catalan, Catalan } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Catalan language spoken in France
 */
export interface ICaFr extends ILocale {
  language: Catalan;
  region: France;
}

/**
 * The locale variable for the Catalan language spoken in France
 */
export const caFR: ICaFr = {
  language: catalan,
  region: france,
};

Object.freeze(caFR);

export default caFR;
