import ILocale from '@lib/ILocale';
import { brazil, Brazil } from '@lib/locale/Iso3166/Part1/Alpha2';
import { portuguese, Portuguese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Portuguese language spoken in Brazil
 */
export interface IPtBr extends ILocale {
  language: Portuguese;
  region: Brazil;
}

/**
 * The locale variable for the Portuguese language spoken in Brazil
 */
export const ptBR: IPtBr = {
  language: portuguese,
  region: brazil,
};

export default ptBR;
