import ILocale from '@lib/ILocale';
import { rwanda, Rwanda } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Rwanda
 */
export interface IFrRw extends ILocale {
  language: French;
  region: Rwanda;
}

/**
 * The locale variable for the French language spoken in Rwanda
 */
export const frRW: IFrRw = {
  language: french,
  region: rwanda
};

export default frRW;
