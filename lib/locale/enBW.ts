import { IImmutable as ILocale } from '@lib/ILocale';
import { botswana, Botswana } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Botswana
 */
export interface IEnBw extends ILocale {
  language: English;
  region: Botswana;
}

/**
 * The locale variable for the English language spoken in Botswana
 */
export const enBW: IEnBw = {
  language: english,
  region: botswana,
};

export default enBW;
