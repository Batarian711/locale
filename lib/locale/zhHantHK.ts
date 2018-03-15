import ILocale from '@lib/ILocale';
import { hongKong, HongKong } from '@lib/locale/Iso3166/Part1/Alpha2';
import { chinese, Chinese } from '@lib/locale/Iso639/Part1';
import { hanTraditional, HanTraditional } from '@lib/locale/Script';

/**
 * The locale interface for the Chinese language spoken in Hong Kong using the Han Traditional script
 */
export interface IZhHantHk extends ILocale {
  language: Chinese;
  region: HongKong;
  script: HanTraditional;
}

/**
 * The locale variable for the Chinese language spoken in Hong Kong using the Han Traditional script
 */
export const zhHantHK: IZhHantHk = {
  language: chinese,
  region: hongKong,
  script: hanTraditional
};

export default zhHantHK;
