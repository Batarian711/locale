import { IImmutable as ILocale } from '@lib/ILocale';
import { seychelles, Seychelles } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Seychelles
 */
export interface IEnSc extends ILocale {
  language: English;
  region: Seychelles;
}

/**
 * The locale variable for the English language spoken in Seychelles
 */
export const enSC: IEnSc = {
  language: english,
  region: seychelles,
};

export default enSC;
