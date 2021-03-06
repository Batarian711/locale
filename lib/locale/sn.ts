import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { shona, Shona } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Shona language
 */
export interface ISn extends ILocale {
  language: Shona;
}

/**
 * The locale variable for the Shona language
 */
export const sn: ISn = {
  language: shona,
};

freeze(sn);

export default sn;
