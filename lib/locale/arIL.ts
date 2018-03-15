import ILocale from '@lib/ILocale';
import { israel, Israel } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Israel
 */
export interface IArIl extends ILocale {
  language: Arabic;
  region: Israel;
}

/**
 * The locale variable for the Arabic language spoken in Israel
 */
export const arIL: IArIl = {
  language: arabic,
  region: israel
};

export default arIL;
