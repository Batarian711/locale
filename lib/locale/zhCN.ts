import ILocale from '@lib/ILocale';
import { china, China } from '@lib/locale/Iso3166/Part1/Alpha2';
import { chinese, Chinese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Chinese language spoken in China
 */
export interface IZhCn extends ILocale {
  language: Chinese;
  region: China;
}

/**
 * The locale variable for the Chinese language spoken in China
 */
export const zhCN: IZhCn = {
  language: chinese,
  region: china
};

export default zhCN;
