import ILocale from '@lib/ILocale';
import { singapore, Singapore } from '@lib/locale/Iso3166/Part1/Alpha2';
import { malay, Malay } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Malay language spoken in Singapore
 */
export interface IMsSg extends ILocale {
  language: Malay;
  region: Singapore;
}

/**
 * The locale variable for the Malay language spoken in Singapore
 */
export const msSG: IMsSg = {
  language: malay,
  region: singapore,
};

export default msSG;
