import { IImmutable as ILocale } from '@lib/ILocale';
import { latvian, Latvian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Latvian language
 */
export interface ILv extends ILocale {
  language: Latvian;
}

/**
 * The locale variable for the Latvian language
 */
export const lv: ILv = {
  language: latvian,
};

export default lv;
