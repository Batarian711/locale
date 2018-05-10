import { IImmutable as ILocale } from '@lib/ILocale';
import { hongKong, HongKong } from '@lib/locale/Iso3166/Part1/Alpha2';
import { chinese, Chinese } from '@lib/locale/Iso639/Part1';
import { hanSimplified, HanSimplified } from '@lib/locale/Script';

/**
 * The locale interface for the Chinese language spoken in Hong Kong using the Han Simplified script
 */
export interface IZhHansHk extends ILocale {
  language: Chinese;
  region: HongKong;
  script: HanSimplified;
}

/**
 * The locale variable for the Chinese language spoken in Hong Kong using the Han Simplified script
 */
export const zhHansHK: IZhHansHk = {
  language: chinese,
  region: hongKong,
  script: hanSimplified,
};

export default zhHansHK;
