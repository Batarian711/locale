import { IImmutable as ILocale } from '@lib/ILocale';
import { taiwanProvinceOfChina, TaiwanProvinceOfChina } from '@lib/locale/Iso3166/Part1/Alpha2';
import { chinese, Chinese } from '@lib/locale/Iso639/Part1';
import { hanTraditional, HanTraditional } from '@lib/locale/Script';

/**
 * The locale interface for the Chinese language spoken in Taiwan, Province of China using the Han Traditional
 * script
 */
export interface IZhHantTw extends ILocale {
  language: Chinese;
  region: TaiwanProvinceOfChina;
  script: HanTraditional;
}

/**
 * The locale variable for the Chinese language spoken in Taiwan, Province of China using the Han Traditional
 * script
 */
export const zhHantTW: IZhHantTw = {
  language: chinese,
  region: taiwanProvinceOfChina,
  script: hanTraditional,
};

export default zhHantTW;
