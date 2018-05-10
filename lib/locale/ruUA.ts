import ILocale from '@lib/ILocale';
import { ukraine, Ukraine } from '@lib/locale/Iso3166/Part1/Alpha2';
import { russian, Russian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Russian language spoken in Ukraine
 */
export interface IRuUa extends ILocale {
  language: Russian;
  region: Ukraine;
}

/**
 * The locale variable for the Russian language spoken in Ukraine
 */
export const ruUA: IRuUa = {
  language: russian,
  region: ukraine,
};

export default ruUA;
