import ILocale from '@lib/ILocale';
import { unitedArabEmirates, UnitedArabEmirates } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in United Arab Emirates
 */
export interface IArAe extends ILocale {
  language: Arabic;
  region: UnitedArabEmirates;
}

/**
 * The locale variable for the Arabic language spoken in United Arab Emirates
 */
export const arAE: IArAe = {
  language: arabic,
  region: unitedArabEmirates
};

export default arAE;
