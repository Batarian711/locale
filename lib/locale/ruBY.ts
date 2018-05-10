import { IImmutable as ILocale } from '@lib/ILocale';
import { belarus, Belarus } from '@lib/locale/Iso3166/Part1/Alpha2';
import { russian, Russian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Russian language spoken in Belarus
 */
export interface IRuBy extends ILocale {
  language: Russian;
  region: Belarus;
}

/**
 * The locale variable for the Russian language spoken in Belarus
 */
export const ruBY: IRuBy = {
  language: russian,
  region: belarus,
};

Object.freeze(ruBY);

export default ruBY;
