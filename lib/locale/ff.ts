import { IImmutable as ILocale } from '@lib/ILocale';
import { fula, Fula } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Fula language
 */
export interface IFf extends ILocale {
  language: Fula;
}

/**
 * The locale variable for the Fula language
 */
export const ff: IFf = {
  language: fula,
};

export default ff;
