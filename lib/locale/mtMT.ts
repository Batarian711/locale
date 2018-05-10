import { IImmutable as ILocale } from '@lib/ILocale';
import { malta, Malta } from '@lib/locale/Iso3166/Part1/Alpha2';
import { maltese, Maltese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Maltese language spoken in Malta
 */
export interface IMtMt extends ILocale {
  language: Maltese;
  region: Malta;
}

/**
 * The locale variable for the Maltese language spoken in Malta
 */
export const mtMT: IMtMt = {
  language: maltese,
  region: malta,
};

export default mtMT;
