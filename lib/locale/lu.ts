import ILocale from '@lib/ILocale';
import { lubaKatanga, LubaKatanga } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Luba-Katanga language
 */
export interface ILu extends ILocale {
  language: LubaKatanga;
}

/**
 * The locale variable for the Luba-Katanga language
 */
export const lu: ILu = {
  language: lubaKatanga,
};

export default lu;
