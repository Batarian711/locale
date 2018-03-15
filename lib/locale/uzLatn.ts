import ILocale from '@lib/ILocale';
import { uzbek, Uzbek } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Uzbek language using the Latin script
 */
export interface IUzLatn extends ILocale {
  language: Uzbek;
  script: Latin;
}

/**
 * The locale variable for the Uzbek language using the Latin script
 */
export const uzLatn: IUzLatn = {
  language: uzbek,
  script: latin
};

export default uzLatn;
