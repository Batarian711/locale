import ILocale from '@lib/ILocale';
import { syrianArabRepublic, SyrianArabRepublic } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Syrian Arab Republic
 */
export interface IArSy extends ILocale {
  language: Arabic;
  region: SyrianArabRepublic;
}

/**
 * The locale variable for the Arabic language spoken in Syrian Arab Republic
 */
export const arSY: IArSy = {
  language: arabic,
  region: syrianArabRepublic,
};

export default arSY;
