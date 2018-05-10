import { IImmutable as ILocale } from '@lib/ILocale';
import { azerbaijani, Azerbaijani } from '@lib/locale/Iso639/Part1';
import { cyrillic, Cyrillic } from '@lib/locale/Script';

/**
 * The locale interface for the Azerbaijani language using the Cyrillic script
 */
export interface IAzCyrl extends ILocale {
  language: Azerbaijani;
  script: Cyrillic;
}

/**
 * The locale variable for the Azerbaijani language using the Cyrillic script
 */
export const azCyrl: IAzCyrl = {
  language: azerbaijani,
  script: cyrillic,
};

Object.freeze(azCyrl);

export default azCyrl;
