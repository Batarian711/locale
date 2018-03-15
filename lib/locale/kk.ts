import ILocale from '@lib/ILocale';
import { kazakh, Kazakh } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Kazakh language
 */
export interface IKk extends ILocale {
  language: Kazakh;
}

/**
 * The locale variable for the Kazakh language
 */
export const kk: IKk = {
  language: kazakh
};

export default kk;
