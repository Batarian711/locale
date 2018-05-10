import { IImmutable as ILocale } from '@lib/ILocale';
import { rwanda, Rwanda } from '@lib/locale/Iso3166/Part1/Alpha2';
import { kinyarwanda, Kinyarwanda } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Kinyarwanda language spoken in Rwanda
 */
export interface IRwRw extends ILocale {
  language: Kinyarwanda;
  region: Rwanda;
}

/**
 * The locale variable for the Kinyarwanda language spoken in Rwanda
 */
export const rwRW: IRwRw = {
  language: kinyarwanda,
  region: rwanda,
};

export default rwRW;
