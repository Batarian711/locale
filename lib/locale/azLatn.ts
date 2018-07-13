import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { azerbaijani, Azerbaijani } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Azerbaijani language using the Latin script
 */
export interface IAzLatn extends ILocale {
  language: Azerbaijani;
  script: Latin;
}

/**
 * The locale variable for the Azerbaijani language using the Latin script
 */
export const azLatn: IAzLatn = {
  language: azerbaijani,
  script: latin,
};

freeze(azLatn);

export default azLatn;
