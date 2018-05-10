import ILocale from '@lib/ILocale';
import { hongKong, HongKong } from '@lib/locale/Iso3166/Part1/Alpha2';
import { chinese, Chinese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Chinese language spoken in Hong Kong
 */
export interface IZhHk extends ILocale {
  language: Chinese;
  region: HongKong;
}

/**
 * The locale variable for the Chinese language spoken in Hong Kong
 */
export const zhHK: IZhHk = {
  language: chinese,
  region: hongKong,
};

export default zhHK;
