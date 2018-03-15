import ILocale from '@lib/ILocale';
import { guineaBissau, GuineaBissau } from '@lib/locale/Iso3166/Part1/Alpha2';
import { portuguese, Portuguese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Portuguese language spoken in Guinea-Bissau
 */
export interface IPtGw extends ILocale {
  language: Portuguese;
  region: GuineaBissau;
}

/**
 * The locale variable for the Portuguese language spoken in Guinea-Bissau
 */
export const ptGW: IPtGw = {
  language: portuguese,
  region: guineaBissau
};

export default ptGW;
