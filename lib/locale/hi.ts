import { IImmutable as ILocale } from '@lib/ILocale';
import { hindi, Hindi } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Hindi language
 */
export interface IHi extends ILocale {
  language: Hindi;
}

/**
 * The locale variable for the Hindi language
 */
export const hi: IHi = {
  language: hindi,
};

Object.freeze(hi);

export default hi;
