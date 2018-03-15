import ILocale from '@lib/ILocale';
import { togo, Togo } from '@lib/locale/Iso3166/Part1/Alpha2';
import { ewe, Ewe } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Ewe language spoken in Togo
 */
export interface IEeTg extends ILocale {
  language: Ewe;
  region: Togo;
}

/**
 * The locale variable for the Ewe language spoken in Togo
 */
export const eeTG: IEeTg = {
  language: ewe,
  region: togo
};

export default eeTG;
