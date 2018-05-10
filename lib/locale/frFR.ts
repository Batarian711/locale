import { IImmutable as ILocale } from '@lib/ILocale';
import { france, France } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in France
 */
export interface IFrFr extends ILocale {
  language: French;
  region: France;
}

/**
 * The locale variable for the French language spoken in France
 */
export const frFR: IFrFr = {
  language: french,
  region: france,
};

Object.freeze(frFR);

export default frFR;
