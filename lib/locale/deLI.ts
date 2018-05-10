import { IImmutable as ILocale } from '@lib/ILocale';
import { liechtenstein, Liechtenstein } from '@lib/locale/Iso3166/Part1/Alpha2';
import { german, German } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the German language spoken in Liechtenstein
 */
export interface IDeLi extends ILocale {
  language: German;
  region: Liechtenstein;
}

/**
 * The locale variable for the German language spoken in Liechtenstein
 */
export const deLI: IDeLi = {
  language: german,
  region: liechtenstein,
};

export default deLI;
