import { IImmutable as ILocale } from '@lib/ILocale';
import { myanmar, Myanmar } from '@lib/locale/Iso3166/Part1/Alpha2';
import { burmese, Burmese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Burmese language spoken in Myanmar
 */
export interface IMyMm extends ILocale {
  language: Burmese;
  region: Myanmar;
}

/**
 * The locale variable for the Burmese language spoken in Myanmar
 */
export const myMM: IMyMm = {
  language: burmese,
  region: myanmar,
};

Object.freeze(myMM);

export default myMM;
