import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { morocco, Morocco } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Morocco
 */
export interface IArMa extends ILocale {
  language: Arabic;
  region: Morocco;
}

/**
 * The locale variable for the Arabic language spoken in Morocco
 */
export const arMA: IArMa = {
  language: arabic,
  region: morocco,
};

freeze(arMA);

export default arMA;
