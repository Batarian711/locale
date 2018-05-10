import ILocale from '@lib/ILocale';
import { bolivia, Bolivia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { quechua, Quechua } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Quechua language spoken in Bolivia
 */
export interface IQuBo extends ILocale {
  language: Quechua;
  region: Bolivia;
}

/**
 * The locale variable for the Quechua language spoken in Bolivia
 */
export const quBO: IQuBo = {
  language: quechua,
  region: bolivia,
};

export default quBO;
