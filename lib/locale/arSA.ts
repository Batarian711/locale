import ILocale from '@lib/ILocale';
import { saudiArabia, SaudiArabia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Saudi Arabia
 */
export interface IArSa extends ILocale {
  language: Arabic;
  region: SaudiArabia;
}

/**
 * The locale variable for the Arabic language spoken in Saudi Arabia
 */
export const arSA: IArSa = {
  language: arabic,
  region: saudiArabia
};

export default arSA;
