import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { armenia, Armenia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { armenian, Armenian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Armenian language spoken in Armenia
 */
export interface IHyAm extends ILocale {
  language: Armenian;
  region: Armenia;
}

/**
 * The locale variable for the Armenian language spoken in Armenia
 */
export const hyAM: IHyAm = {
  language: armenian,
  region: armenia,
};

freeze(hyAM);

export default hyAM;
