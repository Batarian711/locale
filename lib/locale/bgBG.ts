import ILocale from '@lib/ILocale';
import { bulgaria, Bulgaria } from '@lib/locale/Iso3166/Part1/Alpha2';
import { bulgarian, Bulgarian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Bulgarian language spoken in Bulgaria
 */
export interface IBgBg extends ILocale {
  language: Bulgarian;
  region: Bulgaria;
}

/**
 * The locale variable for the Bulgarian language spoken in Bulgaria
 */
export const bgBG: IBgBg = {
  language: bulgarian,
  region: bulgaria
};

export default bgBG;
