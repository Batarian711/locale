import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { dzongkha, Dzongkha } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Dzongkha language
 */
export interface IDz extends ILocale {
  language: Dzongkha;
}

/**
 * The locale variable for the Dzongkha language
 */
export const dz: IDz = {
  language: dzongkha,
};

freeze(dz);

export default dz;
