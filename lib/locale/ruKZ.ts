import ILocale from '@lib/ILocale';
import { kazakhstan, Kazakhstan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { russian, Russian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Russian language spoken in Kazakhstan
 */
export interface IRuKz extends ILocale {
  language: Russian;
  region: Kazakhstan;
}

/**
 * The locale variable for the Russian language spoken in Kazakhstan
 */
export const ruKZ: IRuKz = {
  language: russian,
  region: kazakhstan,
};

export default ruKZ;
