import ILocale from '@lib/ILocale';
import { yemen, Yemen } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Yemen
 */
export interface IArYe extends ILocale {
  language: Arabic;
  region: Yemen;
}

/**
 * The locale variable for the Arabic language spoken in Yemen
 */
export const arYE: IArYe = {
  language: arabic,
  region: yemen
};

export default arYE;
