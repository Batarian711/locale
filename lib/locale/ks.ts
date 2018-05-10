import { IImmutable as ILocale } from '@lib/ILocale';
import { kashmiri, Kashmiri } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Kashmiri language
 */
export interface IKs extends ILocale {
  language: Kashmiri;
}

/**
 * The locale variable for the Kashmiri language
 */
export const ks: IKs = {
  language: kashmiri,
};

export default ks;
