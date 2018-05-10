import { IImmutable as ILocale } from '@lib/ILocale';
import { tunisia, Tunisia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Tunisia
 */
export interface IArTn extends ILocale {
  language: Arabic;
  region: Tunisia;
}

/**
 * The locale variable for the Arabic language spoken in Tunisia
 */
export const arTN: IArTn = {
  language: arabic,
  region: tunisia,
};

export default arTN;
