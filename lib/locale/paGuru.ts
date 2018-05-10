import { IImmutable as ILocale } from '@lib/ILocale';
import { punjabi, Punjabi } from '@lib/locale/Iso639/Part1';
import { gurmukhi, Gurmukhi } from '@lib/locale/Script';

/**
 * The locale interface for the Punjabi language using the Gurmukhi script
 */
export interface IPaGuru extends ILocale {
  language: Punjabi;
  script: Gurmukhi;
}

/**
 * The locale variable for the Punjabi language using the Gurmukhi script
 */
export const paGuru: IPaGuru = {
  language: punjabi,
  script: gurmukhi,
};

export default paGuru;
