import { IImmutable as ILocale } from '@lib/ILocale';
import { hausa, Hausa } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Hausa language using the Latin script
 */
export interface IHaLatn extends ILocale {
  language: Hausa;
  script: Latin;
}

/**
 * The locale variable for the Hausa language using the Latin script
 */
export const haLatn: IHaLatn = {
  language: hausa,
  script: latin,
};

Object.freeze(haLatn);

export default haLatn;
