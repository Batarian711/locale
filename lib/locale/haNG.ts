import { IImmutable as ILocale } from '@lib/ILocale';
import { nigeria, Nigeria } from '@lib/locale/Iso3166/Part1/Alpha2';
import { hausa, Hausa } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Hausa language spoken in Nigeria
 */
export interface IHaNg extends ILocale {
  language: Hausa;
  region: Nigeria;
}

/**
 * The locale variable for the Hausa language spoken in Nigeria
 */
export const haNG: IHaNg = {
  language: hausa,
  region: nigeria,
};

export default haNG;
