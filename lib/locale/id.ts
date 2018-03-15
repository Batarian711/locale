import ILocale from '@lib/ILocale';
import { indonesian, Indonesian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Indonesian language
 */
export interface IId extends ILocale {
  language: Indonesian;
}

/**
 * The locale variable for the Indonesian language
 */
export const id: IId = {
  language: indonesian
};

export default id;
