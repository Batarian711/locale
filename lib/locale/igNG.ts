import { IImmutable as ILocale } from '@lib/ILocale';
import { nigeria, Nigeria } from '@lib/locale/Iso3166/Part1/Alpha2';
import { igbo, Igbo } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Igbo language spoken in Nigeria
 */
export interface IIgNg extends ILocale {
  language: Igbo;
  region: Nigeria;
}

/**
 * The locale variable for the Igbo language spoken in Nigeria
 */
export const igNG: IIgNg = {
  language: igbo,
  region: nigeria,
};

export default igNG;
