import ILocale from '@lib/ILocale';
import { serbian, Serbian } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Serbian language using the Latin script
 */
export interface ISrLatn extends ILocale {
  language: Serbian;
  script: Latin;
}

/**
 * The locale variable for the Serbian language using the Latin script
 */
export const srLatn: ISrLatn = {
  language: serbian,
  script: latin,
};

export default srLatn;
