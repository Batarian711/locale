import ILocale from '@lib/ILocale';
import { galician, Galician } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Galician language
 */
export interface IGl extends ILocale {
  language: Galician;
}

/**
 * The locale variable for the Galician language
 */
export const gl: IGl = {
  language: galician,
};

export default gl;
