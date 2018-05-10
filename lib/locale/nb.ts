import { IImmutable as ILocale } from '@lib/ILocale';
import { norwegianBokmal, NorwegianBokmal } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Norwegian Bokmål language
 */
export interface INb extends ILocale {
  language: NorwegianBokmal;
}

/**
 * The locale variable for the Norwegian Bokmål language
 */
export const nb: INb = {
  language: norwegianBokmal,
};

Object.freeze(nb);

export default nb;
