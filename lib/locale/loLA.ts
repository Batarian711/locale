import { IImmutable as ILocale } from '@lib/ILocale';
import { laoPeoplesDemocraticRepublic, LaoPeoplesDemocraticRepublic } from '@lib/locale/Iso3166/Part1/Alpha2';
import { lao, Lao } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Lao language spoken in Lao Peoples Democratic Republic
 */
export interface ILoLa extends ILocale {
  language: Lao;
  region: LaoPeoplesDemocraticRepublic;
}

/**
 * The locale variable for the Lao language spoken in Lao Peoples Democratic Republic
 */
export const loLA: ILoLa = {
  language: lao,
  region: laoPeoplesDemocraticRepublic,
};

Object.freeze(loLA);

export default loLA;
