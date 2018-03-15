import ILocale from '@lib/ILocale';
import { chinese, Chinese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Chinese language
 */
export interface IZh extends ILocale {
  language: Chinese;
}

/**
 * The locale variable for the Chinese language
 */
export const zh: IZh = {
  language: chinese
};

export default zh;
