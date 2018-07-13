import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { macedonia, Macedonia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { macedonian, Macedonian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Macedonian language spoken in Macedonia
 */
export interface IMkMk extends ILocale {
  language: Macedonian;
  region: Macedonia;
}

/**
 * The locale variable for the Macedonian language spoken in Macedonia
 */
export const mkMK: IMkMk = {
  language: macedonian,
  region: macedonia,
};

freeze(mkMK);

export default mkMK;
