import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { nuosu, Nuosu } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Nuosu language
 */
export interface IIi extends ILocale {
  language: Nuosu;
}

/**
 * The locale variable for the Nuosu language
 */
export const ii: IIi = {
  language: nuosu,
};

freeze(ii);

export default ii;
