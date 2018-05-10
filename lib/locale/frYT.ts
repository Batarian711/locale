import { IImmutable as ILocale } from '@lib/ILocale';
import { mayotte, Mayotte } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Mayotte
 */
export interface IFrYt extends ILocale {
  language: French;
  region: Mayotte;
}

/**
 * The locale variable for the French language spoken in Mayotte
 */
export const frYT: IFrYt = {
  language: french,
  region: mayotte,
};

export default frYT;
