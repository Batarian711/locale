import ILocale from '@lib/ILocale';
import { rwanda, Rwanda } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Rwanda
 */
export interface IEnRw extends ILocale {
  language: English;
  region: Rwanda;
}

/**
 * The locale variable for the English language spoken in Rwanda
 */
export const enRW: IEnRw = {
  language: english,
  region: rwanda
};

export default enRW;
