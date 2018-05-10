import { IImmutable as ILocale } from '@lib/ILocale';
import { nigeria, Nigeria } from '@lib/locale/Iso3166/Part1/Alpha2';
import { hausa, Hausa } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Hausa language spoken in Nigeria using the Latin script
 */
export interface IHaLatnNg extends ILocale {
  language: Hausa;
  region: Nigeria;
  script: Latin;
}

/**
 * The locale variable for the Hausa language spoken in Nigeria using the Latin script
 */
export const haLatnNG: IHaLatnNg = {
  language: hausa,
  region: nigeria,
  script: latin,
};

export default haLatnNG;
