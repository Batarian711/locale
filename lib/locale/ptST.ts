import { IImmutable as ILocale } from '@lib/ILocale';
import { saoTomeAndPrincipe, SaoTomeAndPrincipe } from '@lib/locale/Iso3166/Part1/Alpha2';
import { portuguese, Portuguese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Portuguese language spoken in Sao Tome and Principe
 */
export interface IPtSt extends ILocale {
  language: Portuguese;
  region: SaoTomeAndPrincipe;
}

/**
 * The locale variable for the Portuguese language spoken in Sao Tome and Principe
 */
export const ptST: IPtSt = {
  language: portuguese,
  region: saoTomeAndPrincipe,
};

export default ptST;
