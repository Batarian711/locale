import ILocale from '@lib/ILocale';
import { switzerland, Switzerland } from '@lib/locale/Iso3166/Part1/Alpha2';
import { german, German } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the German language spoken in Switzerland
 */
export interface IDeCh extends ILocale {
  language: German;
  region: Switzerland;
}

/**
 * The locale variable for the German language spoken in Switzerland
 */
export const deCH: IDeCh = {
  language: german,
  region: switzerland,
};

export default deCH;
