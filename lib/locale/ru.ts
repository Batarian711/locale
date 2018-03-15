import ILocale from '@lib/ILocale';
import { russian, Russian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Russian language
 */
export interface IRu extends ILocale {
  language: Russian;
}

/**
 * The locale variable for the Russian language
 */
export const ru: IRu = {
  language: russian
};

export default ru;
