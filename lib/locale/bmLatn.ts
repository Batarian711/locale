import { IImmutable as ILocale } from '@lib/ILocale';
import { bambara, Bambara } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Bambara language using the Latin script
 */
export interface IBmLatn extends ILocale {
  language: Bambara;
  script: Latin;
}

/**
 * The locale variable for the Bambara language using the Latin script
 */
export const bmLatn: IBmLatn = {
  language: bambara,
  script: latin,
};

Object.freeze(bmLatn);

export default bmLatn;
