import ILocale from '@lib/ILocale';
import { algeria, Algeria } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Algeria
 */
export interface IArDz extends ILocale {
  language: Arabic;
  region: Algeria;
}

/**
 * The locale variable for the Arabic language spoken in Algeria
 */
export const arDZ: IArDz = {
  language: arabic,
  region: algeria
};

export default arDZ;
