import { IImmutable as ILocale } from '@lib/ILocale';
import { malawi, Malawi } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Malawi
 */
export interface IEnMw extends ILocale {
  language: English;
  region: Malawi;
}

/**
 * The locale variable for the English language spoken in Malawi
 */
export const enMW: IEnMw = {
  language: english,
  region: malawi,
};

Object.freeze(enMW);

export default enMW;
