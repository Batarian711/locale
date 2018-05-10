import { IImmutable as ILocale } from '@lib/ILocale';
import { sriLanka, SriLanka } from '@lib/locale/Iso3166/Part1/Alpha2';
import { sinhalese, Sinhalese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Sinhalese language spoken in Sri Lanka
 */
export interface ISiLk extends ILocale {
  language: Sinhalese;
  region: SriLanka;
}

/**
 * The locale variable for the Sinhalese language spoken in Sri Lanka
 */
export const siLK: ISiLk = {
  language: sinhalese,
  region: sriLanka,
};

export default siLK;
