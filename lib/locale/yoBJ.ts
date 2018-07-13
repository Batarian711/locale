import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { benin, Benin } from '@lib/locale/Iso3166/Part1/Alpha2';
import { yoruba, Yoruba } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Yoruba language spoken in Benin
 */
export interface IYoBj extends ILocale {
  language: Yoruba;
  region: Benin;
}

/**
 * The locale variable for the Yoruba language spoken in Benin
 */
export const yoBJ: IYoBj = {
  language: yoruba,
  region: benin,
};

freeze(yoBJ);

export default yoBJ;
