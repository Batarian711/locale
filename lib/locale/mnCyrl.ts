import ILocale from '@lib/ILocale';
import { mongolian, Mongolian } from '@lib/locale/Iso639/Part1';
import { cyrillic, Cyrillic } from '@lib/locale/Script';

/**
 * The locale interface for the Mongolian language using the Cyrillic script
 */
export interface IMnCyrl extends ILocale {
  language: Mongolian;
  script: Cyrillic;
}

/**
 * The locale variable for the Mongolian language using the Cyrillic script
 */
export const mnCyrl: IMnCyrl = {
  language: mongolian,
  script: cyrillic,
};

export default mnCyrl;
