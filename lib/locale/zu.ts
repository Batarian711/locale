import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { zulu, Zulu } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Zulu language
 */
export interface IZu extends ILocale {
  language: Zulu;
}

/**
 * The locale variable for the Zulu language
 */
export const zu: IZu = {
  language: zulu,
};

freeze(zu);

export default zu;
