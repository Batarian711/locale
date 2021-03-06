import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { czech, Czech } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Czech language
 */
export interface ICs extends ILocale {
  language: Czech;
}

/**
 * The locale variable for the Czech language
 */
export const cs: ICs = {
  language: czech,
};

freeze(cs);

export default cs;
