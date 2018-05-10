import { IImmutable as ILocale } from '@lib/ILocale';
import { croatia, Croatia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { croatian, Croatian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Croatian language spoken in Croatia
 */
export interface IHrHr extends ILocale {
  language: Croatian;
  region: Croatia;
}

/**
 * The locale variable for the Croatian language spoken in Croatia
 */
export const hrHR: IHrHr = {
  language: croatian,
  region: croatia,
};

export default hrHR;
