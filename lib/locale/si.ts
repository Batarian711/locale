import { IImmutable as ILocale } from '@lib/ILocale';
import { sinhalese, Sinhalese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Sinhalese language
 */
export interface ISi extends ILocale {
  language: Sinhalese;
}

/**
 * The locale variable for the Sinhalese language
 */
export const si: ISi = {
  language: sinhalese,
};

export default si;
