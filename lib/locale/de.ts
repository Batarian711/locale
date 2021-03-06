import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { german, German } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the German language
 */
export interface IDe extends ILocale {
  language: German;
}

/**
 * The locale variable for the German language
 */
export const de: IDe = {
  language: german,
};

freeze(de);

export default de;
