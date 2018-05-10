import { IImmutable as ILocale } from '@lib/ILocale';
import { eritrea, Eritrea } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Eritrea
 */
export interface IArEr extends ILocale {
  language: Arabic;
  region: Eritrea;
}

/**
 * The locale variable for the Arabic language spoken in Eritrea
 */
export const arER: IArEr = {
  language: arabic,
  region: eritrea,
};

export default arER;
