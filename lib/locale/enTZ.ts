import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { tanzaniaUnitedRepublicOf, TanzaniaUnitedRepublicOf } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Tanzania, United Republic of
 */
export interface IEnTz extends ILocale {
  language: English;
  region: TanzaniaUnitedRepublicOf;
}

/**
 * The locale variable for the English language spoken in Tanzania, United Republic of
 */
export const enTZ: IEnTz = {
  language: english,
  region: tanzaniaUnitedRepublicOf,
};

freeze(enTZ);

export default enTZ;
