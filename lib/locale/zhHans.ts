import ILocale from '@lib/ILocale';
import { chinese, Chinese } from '@lib/locale/Iso639/Part1';
import { hanSimplified, HanSimplified } from '@lib/locale/Script';

/**
 * The locale interface for the Chinese language using the Han Simplified script
 */
export interface IZhHans extends ILocale {
  language: Chinese;
  script: HanSimplified;
}

/**
 * The locale variable for the Chinese language using the Han Simplified script
 */
export const zhHans: IZhHans = {
  language: chinese,
  script: hanSimplified
};

export default zhHans;
