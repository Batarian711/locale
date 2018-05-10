import ILocale from '@lib/ILocale';
import { malaysia, Malaysia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { malay, Malay } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Malay language spoken in Malaysia using the Latin script
 */
export interface IMsLatnMy extends ILocale {
  language: Malay;
  region: Malaysia;
  script: Latin;
}

/**
 * The locale variable for the Malay language spoken in Malaysia using the Latin script
 */
export const msLatnMY: IMsLatnMy = {
  language: malay,
  region: malaysia,
  script: latin,
};

export default msLatnMY;
