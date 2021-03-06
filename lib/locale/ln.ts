import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { lingala, Lingala } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Lingala language
 */
export interface ILn extends ILocale {
  language: Lingala;
}

/**
 * The locale variable for the Lingala language
 */
export const ln: ILn = {
  language: lingala,
};

freeze(ln);

export default ln;
