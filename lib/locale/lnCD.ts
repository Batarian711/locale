import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { democraticRepublicOfTheCongo, DemocraticRepublicOfTheCongo } from '@lib/locale/Iso3166/Part1/Alpha2';
import { lingala, Lingala } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Lingala language spoken in Democratic Republic of the Congo
 */
export interface ILnCd extends ILocale {
  language: Lingala;
  region: DemocraticRepublicOfTheCongo;
}

/**
 * The locale variable for the Lingala language spoken in Democratic Republic of the Congo
 */
export const lnCD: ILnCd = {
  language: lingala,
  region: democraticRepublicOfTheCongo,
};

freeze(lnCD);

export default lnCD;
