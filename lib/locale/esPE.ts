import { IImmutable as ILocale } from '@lib/ILocale';
import { peru, Peru } from '@lib/locale/Iso3166/Part1/Alpha2';
import { spanish, Spanish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Spanish language spoken in Peru
 */
export interface IEsPe extends ILocale {
  language: Spanish;
  region: Peru;
}

/**
 * The locale variable for the Spanish language spoken in Peru
 */
export const esPE: IEsPe = {
  language: spanish,
  region: peru,
};

export default esPE;
