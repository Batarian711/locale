import ILocale from '@lib/ILocale';
import { libya, Libya } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Libya
 */
export interface IArLy extends ILocale {
  language: Arabic;
  region: Libya;
}

/**
 * The locale variable for the Arabic language spoken in Libya
 */
export const arLY: IArLy = {
  language: arabic,
  region: libya,
};

export default arLY;
