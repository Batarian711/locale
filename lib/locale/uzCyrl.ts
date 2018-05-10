import { IImmutable as ILocale } from '@lib/ILocale';
import { uzbek, Uzbek } from '@lib/locale/Iso639/Part1';
import { cyrillic, Cyrillic } from '@lib/locale/Script';

/**
 * The locale interface for the Uzbek language using the Cyrillic script
 */
export interface IUzCyrl extends ILocale {
  language: Uzbek;
  script: Cyrillic;
}

/**
 * The locale variable for the Uzbek language using the Cyrillic script
 */
export const uzCyrl: IUzCyrl = {
  language: uzbek,
  script: cyrillic,
};

Object.freeze(uzCyrl);

export default uzCyrl;
