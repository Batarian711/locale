import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { afghanistan, Afghanistan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { pashto, Pashto } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Pashto language spoken in Afghanistan
 */
export interface IPsAf extends ILocale {
  language: Pashto;
  region: Afghanistan;
}

/**
 * The locale variable for the Pashto language spoken in Afghanistan
 */
export const psAF: IPsAf = {
  language: pashto,
  region: afghanistan,
};

freeze(psAF);

export default psAF;
