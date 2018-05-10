import ILocale from '@lib/ILocale';
import { mauritania, Mauritania } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Mauritania
 */
export interface IArMr extends ILocale {
  language: Arabic;
  region: Mauritania;
}

/**
 * The locale variable for the Arabic language spoken in Mauritania
 */
export const arMR: IArMr = {
  language: arabic,
  region: mauritania,
};

export default arMR;
