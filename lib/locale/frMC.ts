import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { monaco, Monaco } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Monaco
 */
export interface IFrMc extends ILocale {
  language: French;
  region: Monaco;
}

/**
 * The locale variable for the French language spoken in Monaco
 */
export const frMC: IFrMc = {
  language: french,
  region: monaco,
};

freeze(frMC);

export default frMC;
