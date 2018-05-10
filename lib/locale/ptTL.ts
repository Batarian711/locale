import { IImmutable as ILocale } from '@lib/ILocale';
import { timorLeste, TimorLeste } from '@lib/locale/Iso3166/Part1/Alpha2';
import { portuguese, Portuguese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Portuguese language spoken in Timor-Leste
 */
export interface IPtTl extends ILocale {
  language: Portuguese;
  region: TimorLeste;
}

/**
 * The locale variable for the Portuguese language spoken in Timor-Leste
 */
export const ptTL: IPtTl = {
  language: portuguese,
  region: timorLeste,
};

export default ptTL;
