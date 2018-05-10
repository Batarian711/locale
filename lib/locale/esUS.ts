import { IImmutable as ILocale } from '@lib/ILocale';
import { unitedStatesOfAmerica, UnitedStatesOfAmerica } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in United States of America
 */
export interface IEsUs extends ILocale {
  language: Spanish;
  region: UnitedStatesOfAmerica;
}

/**
 * The locale variable for the Spanish language spoken in United States of America
 */
export const esUS: IEsUs = {
  language: spanish,
  region: unitedStatesOfAmerica,
};

export default esUS;
