import { IImmutable as ILocale } from '@lib/ILocale';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language
 */
export interface IFr extends ILocale {
  language: French;
}

/**
 * The locale variable for the French language
 */
export const fr: IFr = {
  language: french,
};

export default fr;
