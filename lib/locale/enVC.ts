import { IImmutable as ILocale } from '@lib/ILocale';
import { saintVincentAndTheGrenadines, SaintVincentAndTheGrenadines } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Saint Vincent and the Grenadines
 */
export interface IEnVc extends ILocale {
  language: English;
  region: SaintVincentAndTheGrenadines;
}

/**
 * The locale variable for the English language spoken in Saint Vincent and the Grenadines
 */
export const enVC: IEnVc = {
  language: english,
  region: saintVincentAndTheGrenadines,
};

Object.freeze(enVC);

export default enVC;
