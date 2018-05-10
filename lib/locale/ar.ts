import { IImmutable as ILocale } from '@lib/ILocale';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language
 */
export interface IAr extends ILocale {
  language: Arabic;
}

/**
 * The locale variable for the Arabic language
 */
export const ar: IAr = {
  language: arabic,
};

export default ar;
