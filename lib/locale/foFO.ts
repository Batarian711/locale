import { IImmutable as ILocale } from '@lib/ILocale';
import { faroeIslands, FaroeIslands } from '@lib/locale/Iso3166/Part1/Alpha2';
import { faroese, Faroese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Faroese language spoken in Faroe Islands
 */
export interface IFoFo extends ILocale {
  language: Faroese;
  region: FaroeIslands;
}

/**
 * The locale variable for the Faroese language spoken in Faroe Islands
 */
export const foFO: IFoFo = {
  language: faroese,
  region: faroeIslands,
};

export default foFO;
