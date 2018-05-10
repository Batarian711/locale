import ILocale from '@lib/ILocale';
import { oromo, Oromo } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Oromo language
 */
export interface IOm extends ILocale {
  language: Oromo;
}

/**
 * The locale variable for the Oromo language
 */
export const om: IOm = {
  language: oromo,
};

export default om;
