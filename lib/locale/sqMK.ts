import { IImmutable as ILocale } from '@lib/ILocale';
import { macedonia, Macedonia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { albanian, Albanian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Albanian language spoken in Macedonia
 */
export interface ISqMk extends ILocale {
  language: Albanian;
  region: Macedonia;
}

/**
 * The locale variable for the Albanian language spoken in Macedonia
 */
export const sqMK: ISqMk = {
  language: albanian,
  region: macedonia,
};

Object.freeze(sqMK);

export default sqMK;
