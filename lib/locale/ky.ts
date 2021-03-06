import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { kyrgyz, Kyrgyz } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Kyrgyz language
 */
export interface IKy extends ILocale {
  language: Kyrgyz;
}

/**
 * The locale variable for the Kyrgyz language
 */
export const ky: IKy = {
  language: kyrgyz,
};

freeze(ky);

export default ky;
