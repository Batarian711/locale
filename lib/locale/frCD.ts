import ILocale from '@lib/ILocale';
import { democraticRepublicOfTheCongo, DemocraticRepublicOfTheCongo } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Democratic Republic of the Congo
 */
export interface IFrCd extends ILocale {
  language: French;
  region: DemocraticRepublicOfTheCongo;
}

/**
 * The locale variable for the French language spoken in Democratic Republic of the Congo
 */
export const frCD: IFrCd = {
  language: french,
  region: democraticRepublicOfTheCongo,
};

export default frCD;
