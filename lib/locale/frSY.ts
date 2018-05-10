import { IImmutable as ILocale } from '@lib/ILocale';
import { syrianArabRepublic, SyrianArabRepublic } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Syrian Arab Republic
 */
export interface IFrSy extends ILocale {
  language: French;
  region: SyrianArabRepublic;
}

/**
 * The locale variable for the French language spoken in Syrian Arab Republic
 */
export const frSY: IFrSy = {
  language: french,
  region: syrianArabRepublic,
};

Object.freeze(frSY);

export default frSY;
