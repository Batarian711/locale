import ILocale from '@lib/ILocale';
import { chad, Chad } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Chad
 */
export interface IFrTd extends ILocale {
  language: French;
  region: Chad;
}

/**
 * The locale variable for the French language spoken in Chad
 */
export const frTD: IFrTd = {
  language: french,
  region: chad
};

export default frTD;
