import { IImmutable as ILocale } from '@lib/ILocale';
import { kyrgyzstan, Kyrgyzstan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { kyrgyz, Kyrgyz } from '@lib/locale/Iso639/Part1';
import { cyrillic, Cyrillic } from '@lib/locale/Script';

/**
 * The locale interface for the Kyrgyz language spoken in Kyrgyzstan using the Cyrillic script
 */
export interface IKyCyrlKg extends ILocale {
  language: Kyrgyz;
  region: Kyrgyzstan;
  script: Cyrillic;
}

/**
 * The locale variable for the Kyrgyz language spoken in Kyrgyzstan using the Cyrillic script
 */
export const kyCyrlKG: IKyCyrlKg = {
  language: kyrgyz,
  region: kyrgyzstan,
  script: cyrillic,
};

Object.freeze(kyCyrlKG);

export default kyCyrlKG;
