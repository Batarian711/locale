import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { afghanistan, Afghanistan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { uzbek, Uzbek } from '@lib/locale/Iso639/Part1';
import { arabic, Arabic } from '@lib/locale/Script';

/**
 * The locale interface for the Uzbek language spoken in Afghanistan using the Arabic script
 */
export interface IUzArabAf extends ILocale {
  language: Uzbek;
  region: Afghanistan;
  script: Arabic;
}

/**
 * The locale variable for the Uzbek language spoken in Afghanistan using the Arabic script
 */
export const uzArabAF: IUzArabAf = {
  language: uzbek,
  region: afghanistan,
  script: arabic,
};

freeze(uzArabAF);

export default uzArabAF;
