import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { tanzaniaUnitedRepublicOf, TanzaniaUnitedRepublicOf } from '@lib/locale/Iso3166/Part1/Alpha2';
import { swahili, Swahili } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Swahili language spoken in Tanzania, United Republic of
 */
export interface ISwTz extends ILocale {
  language: Swahili;
  region: TanzaniaUnitedRepublicOf;
}

/**
 * The locale variable for the Swahili language spoken in Tanzania, United Republic of
 */
export const swTZ: ISwTz = {
  language: swahili,
  region: tanzaniaUnitedRepublicOf,
};

freeze(swTZ);

export default swTZ;
