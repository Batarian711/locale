import ILocale from '@lib/ILocale';
import { bosnian, Bosnian } from '@lib/locale/Iso639/Part1';
import { cyrillic, Cyrillic } from '@lib/locale/Script';

/**
 * The locale interface for the Bosnian language using the Cyrillic script
 */
export interface IBsCyrl extends ILocale {
  language: Bosnian;
  script: Cyrillic;
}

/**
 * The locale variable for the Bosnian language using the Cyrillic script
 */
export const bsCyrl: IBsCyrl = {
  language: bosnian,
  script: cyrillic,
};

export default bsCyrl;
