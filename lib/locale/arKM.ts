import ILocale from '@lib/ILocale';
import { comoros, Comoros } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Comoros
 */
export interface IArKm extends ILocale {
  language: Arabic;
  region: Comoros;
}

/**
 * The locale variable for the Arabic language spoken in Comoros
 */
export const arKM: IArKm = {
  language: arabic,
  region: comoros,
};

export default arKM;
