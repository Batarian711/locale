import { IImmutable as ILocale } from '@lib/ILocale';
import { denmark, Denmark } from '@lib/locale/Iso3166/Part1/Alpha2';
import { danish, Danish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Danish language spoken in Denmark
 */
export interface IDaDk extends ILocale {
  language: Danish;
  region: Denmark;
}

/**
 * The locale variable for the Danish language spoken in Denmark
 */
export const daDK: IDaDk = {
  language: danish,
  region: denmark,
};

Object.freeze(daDK);

export default daDK;
