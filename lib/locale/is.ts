import { IImmutable as ILocale } from '@lib/ILocale';
import { icelandic, Icelandic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Icelandic language
 */
export interface IIs extends ILocale {
  language: Icelandic;
}

/**
 * The locale variable for the Icelandic language
 */
export const is: IIs = {
  language: icelandic,
};

export default is;
