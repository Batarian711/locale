import { IImmutable as ILocale } from '@lib/ILocale';
import { westernSahara, WesternSahara } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Western Sahara
 */
export interface IArEh extends ILocale {
  language: Arabic;
  region: WesternSahara;
}

/**
 * The locale variable for the Arabic language spoken in Western Sahara
 */
export const arEH: IArEh = {
  language: arabic,
  region: westernSahara,
};

Object.freeze(arEH);

export default arEH;
