import { IImmutable as ILocale } from '@lib/ILocale';
import { benin, Benin } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Benin
 */
export interface IFrBj extends ILocale {
  language: French;
  region: Benin;
}

/**
 * The locale variable for the French language spoken in Benin
 */
export const frBJ: IFrBj = {
  language: french,
  region: benin,
};

Object.freeze(frBJ);

export default frBJ;
