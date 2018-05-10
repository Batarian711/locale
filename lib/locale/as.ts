import ILocale from '@lib/ILocale';
import { assamese, Assamese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Assamese language
 */
export interface IAs extends ILocale {
  language: Assamese;
}

/**
 * The locale variable for the Assamese language
 */
export const as: IAs = {
  language: assamese,
};

export default as;
