import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { kenya, Kenya } from '@lib/locale/Iso3166/Part1/Alpha2';
import { oromo, Oromo } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Oromo language spoken in Kenya
 */
export interface IOmKe extends ILocale {
  language: Oromo;
  region: Kenya;
}

/**
 * The locale variable for the Oromo language spoken in Kenya
 */
export const omKE: IOmKe = {
  language: oromo,
  region: kenya,
};

freeze(omKE);

export default omKE;
