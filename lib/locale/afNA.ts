import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { namibia, Namibia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { afrikaans, Afrikaans } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Afrikaans language spoken in Namibia
 */
export interface IAfNa extends ILocale {
  language: Afrikaans;
  region: Namibia;
}

/**
 * The locale variable for the Afrikaans language spoken in Namibia
 */
export const afNA: IAfNa = {
  language: afrikaans,
  region: namibia,
};

freeze(afNA);

export default afNA;
