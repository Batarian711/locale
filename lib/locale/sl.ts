import ILocale from '@lib/ILocale';
import { slovene, Slovene } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Slovene language
 */
export interface ISl extends ILocale {
  language: Slovene;
}

/**
 * The locale variable for the Slovene language
 */
export const sl: ISl = {
  language: slovene,
};

export default sl;
