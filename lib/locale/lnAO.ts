import ILocale from '@lib/ILocale';
import { angola, Angola } from '@lib/locale/Iso3166/Part1/Alpha2';
import { lingala, Lingala } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Lingala language spoken in Angola
 */
export interface ILnAo extends ILocale {
  language: Lingala;
  region: Angola;
}

/**
 * The locale variable for the Lingala language spoken in Angola
 */
export const lnAO: ILnAo = {
  language: lingala,
  region: angola,
};

export default lnAO;
