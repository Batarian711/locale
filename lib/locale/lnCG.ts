import { IImmutable as ILocale } from '@lib/ILocale';
import { congo, Congo } from '@lib/locale/Iso3166/Part1/Alpha2';
import { lingala, Lingala } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Lingala language spoken in Congo
 */
export interface ILnCg extends ILocale {
  language: Lingala;
  region: Congo;
}

/**
 * The locale variable for the Lingala language spoken in Congo
 */
export const lnCG: ILnCg = {
  language: lingala,
  region: congo,
};

export default lnCG;
