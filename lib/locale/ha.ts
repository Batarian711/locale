import { IImmutable as ILocale } from '@lib/ILocale';
import { hausa, Hausa } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Hausa language
 */
export interface IHa extends ILocale {
  language: Hausa;
}

/**
 * The locale variable for the Hausa language
 */
export const ha: IHa = {
  language: hausa,
};

Object.freeze(ha);

export default ha;
