import ILocale from '@lib/ILocale';
import { ethiopia, Ethiopia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { oromo, Oromo } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Oromo language spoken in Ethiopia
 */
export interface IOmEt extends ILocale {
  language: Oromo;
  region: Ethiopia;
}

/**
 * The locale variable for the Oromo language spoken in Ethiopia
 */
export const omET: IOmEt = {
  language: oromo,
  region: ethiopia
};

export default omET;
