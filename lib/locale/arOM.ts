import { IImmutable as ILocale } from '@lib/ILocale';
import { oman, Oman } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Oman
 */
export interface IArOm extends ILocale {
  language: Arabic;
  region: Oman;
}

/**
 * The locale variable for the Arabic language spoken in Oman
 */
export const arOM: IArOm = {
  language: arabic,
  region: oman,
};

Object.freeze(arOM);

export default arOM;
