import { IImmutable as ILocale } from '@lib/ILocale';
import { gujarati, Gujarati } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Gujarati language
 */
export interface IGu extends ILocale {
  language: Gujarati;
}

/**
 * The locale variable for the Gujarati language
 */
export const gu: IGu = {
  language: gujarati,
};

export default gu;
