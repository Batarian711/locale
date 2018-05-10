import { IImmutable as ILocale } from '@lib/ILocale';
import { vanuatu, Vanuatu } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Vanuatu
 */
export interface IFrVu extends ILocale {
  language: French;
  region: Vanuatu;
}

/**
 * The locale variable for the French language spoken in Vanuatu
 */
export const frVU: IFrVu = {
  language: french,
  region: vanuatu,
};

export default frVU;
