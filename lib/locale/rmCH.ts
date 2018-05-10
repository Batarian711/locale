import ILocale from '@lib/ILocale';
import { switzerland, Switzerland } from '@lib/locale/Iso3166/Part1/Alpha2';
import { romansh, Romansh } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Romansh language spoken in Switzerland
 */
export interface IRmCh extends ILocale {
  language: Romansh;
  region: Switzerland;
}

/**
 * The locale variable for the Romansh language spoken in Switzerland
 */
export const rmCH: IRmCh = {
  language: romansh,
  region: switzerland,
};

export default rmCH;
