import { IImmutable as ILocale } from '@lib/ILocale';
import { cyprus, Cyprus } from '@lib/locale/Iso3166/Part1/Alpha2';
import { greek, Greek } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Greek language spoken in Cyprus
 */
export interface IElCy extends ILocale {
  language: Greek;
  region: Cyprus;
}

/**
 * The locale variable for the Greek language spoken in Cyprus
 */
export const elCY: IElCy = {
  language: greek,
  region: cyprus,
};

export default elCY;
