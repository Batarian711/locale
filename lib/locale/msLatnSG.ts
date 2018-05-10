import ILocale from '@lib/ILocale';
import { singapore, Singapore } from '@lib/locale/Iso3166/Part1/Alpha2';
import { malay, Malay } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Malay language spoken in Singapore using the Latin script
 */
export interface IMsLatnSg extends ILocale {
  language: Malay;
  region: Singapore;
  script: Latin;
}

/**
 * The locale variable for the Malay language spoken in Singapore using the Latin script
 */
export const msLatnSG: IMsLatnSg = {
  language: malay,
  region: singapore,
  script: latin,
};

export default msLatnSG;
