import { freeze } from '@lib/freeze';
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

freeze(it);

export default it;
