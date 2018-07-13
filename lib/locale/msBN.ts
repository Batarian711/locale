import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { bruneiDarussalam, BruneiDarussalam } from '@lib/locale/Iso3166/Part1/Alpha2';
import { malay, Malay } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Malay language spoken in Brunei Darussalam
 */
export interface IMsBn extends ILocale {
  language: Malay;
  region: BruneiDarussalam;
}

/**
 * The locale variable for the Malay language spoken in Brunei Darussalam
 */
export const msBN: IMsBn = {
  language: malay,
  region: bruneiDarussalam,
};

freeze(msBN);

export default msBN;
