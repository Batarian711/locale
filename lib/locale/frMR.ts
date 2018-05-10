import { IImmutable as ILocale } from '@lib/ILocale';
import { mauritania, Mauritania } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Mauritania
 */
export interface IFrMr extends ILocale {
  language: French;
  region: Mauritania;
}

/**
 * The locale variable for the French language spoken in Mauritania
 */
export const frMR: IFrMr = {
  language: french,
  region: mauritania,
};

Object.freeze(frMR);

export default frMR;
