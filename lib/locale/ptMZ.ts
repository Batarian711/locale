import { IImmutable as ILocale } from '@lib/ILocale';
import { mozambique, Mozambique } from '@lib/locale/Iso3166/Part1/Alpha2';
import { portuguese, Portuguese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Portuguese language spoken in Mozambique
 */
export interface IPtMz extends ILocale {
  language: Portuguese;
  region: Mozambique;
}

/**
 * The locale variable for the Portuguese language spoken in Mozambique
 */
export const ptMZ: IPtMz = {
  language: portuguese,
  region: mozambique,
};

Object.freeze(ptMZ);

export default ptMZ;
