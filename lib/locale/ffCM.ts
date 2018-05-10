import { IImmutable as ILocale } from '@lib/ILocale';
import { cameroon, Cameroon } from '@lib/locale/Iso3166/Part1/Alpha2';
import { fula, Fula } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Fula language spoken in Cameroon
 */
export interface IFfCm extends ILocale {
  language: Fula;
  region: Cameroon;
}

/**
 * The locale variable for the Fula language spoken in Cameroon
 */
export const ffCM: IFfCm = {
  language: fula,
  region: cameroon,
};

Object.freeze(ffCM);

export default ffCM;
