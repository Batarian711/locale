import ILocale from '@lib/ILocale';
import { khmer, Khmer } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Khmer language
 */
export interface IKm extends ILocale {
  language: Khmer;
}

/**
 * The locale variable for the Khmer language
 */
export const km: IKm = {
  language: khmer
};

export default km;
