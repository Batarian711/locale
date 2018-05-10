import { IImmutable as ILocale } from '@lib/ILocale';
import { norwegian, Norwegian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Norwegian language
 */
export interface INo extends ILocale {
  language: Norwegian;
}

/**
 * The locale variable for the Norwegian language
 */
export const no: INo = {
  language: norwegian,
};

export default no;
