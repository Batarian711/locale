import { IImmutable as ILocale } from '@lib/ILocale';
import { madagascar, Madagascar } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Madagascar
 */
export interface IFrMg extends ILocale {
  language: French;
  region: Madagascar;
}

/**
 * The locale variable for the French language spoken in Madagascar
 */
export const frMG: IFrMg = {
  language: french,
  region: madagascar,
};

Object.freeze(frMG);

export default frMG;
