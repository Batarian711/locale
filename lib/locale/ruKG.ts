import { IImmutable as ILocale } from '@lib/ILocale';
import { kyrgyzstan, Kyrgyzstan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { russian, Russian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Russian language spoken in Kyrgyzstan
 */
export interface IRuKg extends ILocale {
  language: Russian;
  region: Kyrgyzstan;
}

/**
 * The locale variable for the Russian language spoken in Kyrgyzstan
 */
export const ruKG: IRuKg = {
  language: russian,
  region: kyrgyzstan,
};

Object.freeze(ruKG);

export default ruKG;
