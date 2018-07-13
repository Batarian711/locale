import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { pashto, Pashto } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Pashto language
 */
export interface IPs extends ILocale {
  language: Pashto;
}

/**
 * The locale variable for the Pashto language
 */
export const ps: IPs = {
  language: pashto,
};

freeze(ps);

export default ps;
