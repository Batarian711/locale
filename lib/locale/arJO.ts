import ILocale from '@lib/ILocale';
import { jordan, Jordan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Jordan
 */
export interface IArJo extends ILocale {
  language: Arabic;
  region: Jordan;
}

/**
 * The locale variable for the Arabic language spoken in Jordan
 */
export const arJO: IArJo = {
  language: arabic,
  region: jordan
};

export default arJO;
