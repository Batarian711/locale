import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { malagasy, Malagasy } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Malagasy language
 */
export interface IMg extends ILocale {
  language: Malagasy;
}

/**
 * The locale variable for the Malagasy language
 */
export const mg: IMg = {
  language: malagasy,
};

freeze(mg);

export default mg;
