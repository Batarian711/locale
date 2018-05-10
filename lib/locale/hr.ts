import ILocale from '@lib/ILocale';
import { croatian, Croatian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Croatian language
 */
export interface IHr extends ILocale {
  language: Croatian;
}

/**
 * The locale variable for the Croatian language
 */
export const hr: IHr = {
  language: croatian,
};

export default hr;
