import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { malay, Malay } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Malay language
 */
export interface IMs extends ILocale {
  language: Malay;
}

/**
 * The locale variable for the Malay language
 */
export const ms: IMs = {
  language: malay,
};

freeze(ms);

export default ms;
