import { IImmutable as ILocale } from '@lib/ILocale';
import { southSudan, SouthSudan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in South Sudan
 */
export interface IArSs extends ILocale {
  language: Arabic;
  region: SouthSudan;
}

/**
 * The locale variable for the Arabic language spoken in South Sudan
 */
export const arSS: IArSs = {
  language: arabic,
  region: southSudan,
};

Object.freeze(arSS);

export default arSS;
