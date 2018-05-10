import { IImmutable as ILocale } from '@lib/ILocale';
import { taiwanProvinceOfChina, TaiwanProvinceOfChina } from '@lib/locale/Iso3166/Part1/Alpha2';
import { chinese, Chinese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Chinese language spoken in Taiwan, Province of China
 */
export interface IZhTw extends ILocale {
  language: Chinese;
  region: TaiwanProvinceOfChina;
}

/**
 * The locale variable for the Chinese language spoken in Taiwan, Province of China
 */
export const zhTW: IZhTw = {
  language: chinese,
  region: taiwanProvinceOfChina,
};

Object.freeze(zhTW);

export default zhTW;
