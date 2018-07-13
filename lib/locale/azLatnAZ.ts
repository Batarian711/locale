import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { azerbaijan, Azerbaijan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { azerbaijani, Azerbaijani } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Azerbaijani language spoken in Azerbaijan using the Latin script
 */
export interface IAzLatnAz extends ILocale {
  language: Azerbaijani;
  region: Azerbaijan;
  script: Latin;
}

/**
 * The locale variable for the Azerbaijani language spoken in Azerbaijan using the Latin script
 */
export const azLatnAZ: IAzLatnAz = {
  language: azerbaijani,
  region: azerbaijan,
  script: latin,
};

freeze(azLatnAZ);

export default azLatnAZ;
