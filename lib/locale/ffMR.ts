import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { mauritania, Mauritania } from '@lib/locale/Iso3166/Part1/Alpha2';
import { fula, Fula } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Fula language spoken in Mauritania
 */
export interface IFfMr extends ILocale {
  language: Fula;
  region: Mauritania;
}

/**
 * The locale variable for the Fula language spoken in Mauritania
 */
export const ffMR: IFfMr = {
  language: fula,
  region: mauritania,
};

freeze(ffMR);

export default ffMR;
