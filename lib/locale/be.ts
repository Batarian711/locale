import ILocale from '@lib/ILocale';
import { belarusian, Belarusian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Belarusian language
 */
export interface IBe extends ILocale {
  language: Belarusian;
}

/**
 * The locale variable for the Belarusian language
 */
export const be: IBe = {
  language: belarusian,
};

export default be;
