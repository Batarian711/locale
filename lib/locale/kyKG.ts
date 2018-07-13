import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { kyrgyzstan, Kyrgyzstan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { kyrgyz, Kyrgyz } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Kyrgyz language spoken in Kyrgyzstan
 */
export interface IKyKg extends ILocale {
  language: Kyrgyz;
  region: Kyrgyzstan;
}

/**
 * The locale variable for the Kyrgyz language spoken in Kyrgyzstan
 */
export const kyKG: IKyKg = {
  language: kyrgyz,
  region: kyrgyzstan,
};

freeze(kyKG);

export default kyKG;
