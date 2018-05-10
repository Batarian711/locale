import ILocale from '@lib/ILocale';
import { bahrain, Bahrain } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Bahrain
 */
export interface IArBh extends ILocale {
  language: Arabic;
  region: Bahrain;
}

/**
 * The locale variable for the Arabic language spoken in Bahrain
 */
export const arBH: IArBh = {
  language: arabic,
  region: bahrain,
};

export default arBH;
