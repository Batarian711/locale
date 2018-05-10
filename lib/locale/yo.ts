import { IImmutable as ILocale } from '@lib/ILocale';
import { yoruba, Yoruba } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Yoruba language
 */
export interface IYo extends ILocale {
  language: Yoruba;
}

/**
 * The locale variable for the Yoruba language
 */
export const yo: IYo = {
  language: yoruba,
};

Object.freeze(yo);

export default yo;
