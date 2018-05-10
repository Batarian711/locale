import { IImmutable as ILocale } from '@lib/ILocale';
import { serbian, Serbian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Serbian language
 */
export interface ISr extends ILocale {
  language: Serbian;
}

/**
 * The locale variable for the Serbian language
 */
export const sr: ISr = {
  language: serbian,
};

export default sr;
