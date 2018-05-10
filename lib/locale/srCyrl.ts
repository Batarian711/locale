import { IImmutable as ILocale } from '@lib/ILocale';
import { serbian, Serbian } from '@lib/locale/Iso639/Part1';
import { cyrillic, Cyrillic } from '@lib/locale/Script';

/**
 * The locale interface for the Serbian language using the Cyrillic script
 */
export interface ISrCyrl extends ILocale {
  language: Serbian;
  script: Cyrillic;
}

/**
 * The locale variable for the Serbian language using the Cyrillic script
 */
export const srCyrl: ISrCyrl = {
  language: serbian,
  script: cyrillic,
};

export default srCyrl;
