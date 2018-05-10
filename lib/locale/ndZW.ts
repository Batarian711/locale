import ILocale from '@lib/ILocale';
import { zimbabwe, Zimbabwe } from '@lib/locale/Iso3166/Part1/Alpha2';
import { northernNdebele, NorthernNdebele } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Northern Ndebele language spoken in Zimbabwe
 */
export interface INdZw extends ILocale {
  language: NorthernNdebele;
  region: Zimbabwe;
}

/**
 * The locale variable for the Northern Ndebele language spoken in Zimbabwe
 */
export const ndZW: INdZw = {
  language: northernNdebele,
  region: zimbabwe,
};

export default ndZW;
