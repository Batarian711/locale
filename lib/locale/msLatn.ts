import { IImmutable as ILocale } from '@lib/ILocale';
import { malay, Malay } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Malay language using the Latin script
 */
export interface IMsLatn extends ILocale {
  language: Malay;
  script: Latin;
}

/**
 * The locale variable for the Malay language using the Latin script
 */
export const msLatn: IMsLatn = {
  language: malay,
  script: latin,
};

export default msLatn;
