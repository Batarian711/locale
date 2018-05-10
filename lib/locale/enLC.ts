import { IImmutable as ILocale } from '@lib/ILocale';
import { saintLucia, SaintLucia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Saint Lucia
 */
export interface IEnLc extends ILocale {
  language: English;
  region: SaintLucia;
}

/**
 * The locale variable for the English language spoken in Saint Lucia
 */
export const enLC: IEnLc = {
  language: english,
  region: saintLucia,
};

Object.freeze(enLC);

export default enLC;
