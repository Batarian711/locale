import { IImmutable as ILocale } from '@lib/ILocale';
import { kirundi, Kirundi } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Kirundi language
 */
export interface IRn extends ILocale {
  language: Kirundi;
}

/**
 * The locale variable for the Kirundi language
 */
export const rn: IRn = {
  language: kirundi,
};

Object.freeze(rn);

export default rn;
