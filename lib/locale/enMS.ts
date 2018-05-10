import { IImmutable as ILocale } from '@lib/ILocale';
import { montserrat, Montserrat } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Montserrat
 */
export interface IEnMs extends ILocale {
  language: English;
  region: Montserrat;
}

/**
 * The locale variable for the English language spoken in Montserrat
 */
export const enMS: IEnMs = {
  language: english,
  region: montserrat,
};

Object.freeze(enMS);

export default enMS;
