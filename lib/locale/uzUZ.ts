import { IImmutable as ILocale } from '@lib/ILocale';
import { uzbekistan, Uzbekistan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { uzbek, Uzbek } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Uzbek language spoken in Uzbekistan
 */
export interface IUzUz extends ILocale {
  language: Uzbek;
  region: Uzbekistan;
}

/**
 * The locale variable for the Uzbek language spoken in Uzbekistan
 */
export const uzUZ: IUzUz = {
  language: uzbek,
  region: uzbekistan,
};

export default uzUZ;
