import { IImmutable as ILocale } from '@lib/ILocale';
import { sudan, Sudan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Sudan
 */
export interface IArSd extends ILocale {
  language: Arabic;
  region: Sudan;
}

/**
 * The locale variable for the Arabic language spoken in Sudan
 */
export const arSD: IArSd = {
  language: arabic,
  region: sudan,
};

Object.freeze(arSD);

export default arSD;
