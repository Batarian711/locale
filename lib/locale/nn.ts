import ILocale from '@lib/ILocale';
import { norwegianNynorsk, NorwegianNynorsk } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Norwegian Nynorsk language
 */
export interface INn extends ILocale {
  language: NorwegianNynorsk;
}

/**
 * The locale variable for the Norwegian Nynorsk language
 */
export const nn: INn = {
  language: norwegianNynorsk
};

export default nn;
