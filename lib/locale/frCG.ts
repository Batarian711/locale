import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { congo, Congo } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Congo
 */
export interface IFrCg extends ILocale {
  language: French;
  region: Congo;
}

/**
 * The locale variable for the French language spoken in Congo
 */
export const frCG: IFrCg = {
  language: french,
  region: congo,
};

freeze(frCG);

export default frCG;
