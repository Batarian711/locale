import ILocale from '@lib/ILocale';
import { mali, Mali } from '@lib/locale/Iso3166/Part1/Alpha2';
import { bambara, Bambara } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Bambara language spoken in Mali using the Latin script
 */
export interface IBmLatnMl extends ILocale {
  language: Bambara;
  region: Mali;
  script: Latin;
}

/**
 * The locale variable for the Bambara language spoken in Mali using the Latin script
 */
export const bmLatnML: IBmLatnMl = {
  language: bambara,
  region: mali,
  script: latin,
};

export default bmLatnML;
