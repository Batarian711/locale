import { IImmutable as ILocale } from '@lib/ILocale';
import { bruneiDarussalam, BruneiDarussalam } from '@lib/locale/Iso3166/Part1/Alpha2';
import { malay, Malay } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Malay language spoken in Brunei Darussalam using the Latin script
 */
export interface IMsLatnBn extends ILocale {
  language: Malay;
  region: BruneiDarussalam;
  script: Latin;
}

/**
 * The locale variable for the Malay language spoken in Brunei Darussalam using the Latin script
 */
export const msLatnBN: IMsLatnBn = {
  language: malay,
  region: bruneiDarussalam,
  script: latin,
};

export default msLatnBN;
