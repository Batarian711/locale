import { IImmutable as ILocale } from '@lib/ILocale';
import { china, China } from '@lib/locale/Iso3166/Part1/Alpha2';
import { chinese, Chinese } from '@lib/locale/Iso639/Part1';
import { hanSimplified, HanSimplified } from '@lib/locale/Script';

/**
 * The locale interface for the Chinese language spoken in China using the Han Simplified script
 */
export interface IZhHansCn extends ILocale {
  language: Chinese;
  region: China;
  script: HanSimplified;
}

/**
 * The locale variable for the Chinese language spoken in China using the Han Simplified script
 */
export const zhHansCN: IZhHansCn = {
  language: chinese,
  region: china,
  script: hanSimplified,
};

export default zhHansCN;
