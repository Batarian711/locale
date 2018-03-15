import ILocale from '@lib/ILocale';
import { georgian, Georgian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Georgian language
 */
export interface IKa extends ILocale {
  language: Georgian;
}

/**
 * The locale variable for the Georgian language
 */
export const ka: IKa = {
  language: georgian
};

export default ka;
