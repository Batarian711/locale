import { IImmutable as ILocale } from '@lib/ILocale';
import { italian, Italian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Italian language
 */
export interface IIt extends ILocale {
  language: Italian;
}

/**
 * The locale variable for the Italian language
 */
export const it: IIt = {
  language: italian,
};

export default it;
