import ILocale from '@lib/ILocale';
import { ukrainian, Ukrainian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Ukrainian language
 */
export interface IUk extends ILocale {
  language: Ukrainian;
}

/**
 * The locale variable for the Ukrainian language
 */
export const uk: IUk = {
  language: ukrainian,
};

export default uk;
