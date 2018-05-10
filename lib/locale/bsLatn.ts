import ILocale from '@lib/ILocale';
import { bosnian, Bosnian } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Bosnian language using the Latin script
 */
export interface IBsLatn extends ILocale {
  language: Bosnian;
  script: Latin;
}

/**
 * The locale variable for the Bosnian language using the Latin script
 */
export const bsLatn: IBsLatn = {
  language: bosnian,
  script: latin,
};

export default bsLatn;
