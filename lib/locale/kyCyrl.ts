import { IImmutable as ILocale } from '@lib/ILocale';
import { kyrgyz, Kyrgyz } from '@lib/locale/Iso639/Part1';
import { cyrillic, Cyrillic } from '@lib/locale/Script';

/**
 * The locale interface for the Kyrgyz language using the Cyrillic script
 */
export interface IKyCyrl extends ILocale {
  language: Kyrgyz;
  script: Cyrillic;
}

/**
 * The locale variable for the Kyrgyz language using the Cyrillic script
 */
export const kyCyrl: IKyCyrl = {
  language: kyrgyz,
  script: cyrillic,
};

export default kyCyrl;
