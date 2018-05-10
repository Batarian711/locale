import ILocale from '@lib/ILocale';
import { uzbek, Uzbek } from '@lib/locale/Iso639/Part1';
import { arabic, Arabic } from '@lib/locale/Script';

/**
 * The locale interface for the Uzbek language using the Arabic script
 */
export interface IUzArab extends ILocale {
  language: Uzbek;
  script: Arabic;
}

/**
 * The locale variable for the Uzbek language using the Arabic script
 */
export const uzArab: IUzArab = {
  language: uzbek,
  script: arabic,
};

export default uzArab;
