import ILocale from '@lib/ILocale';
import { uzbekistan, Uzbekistan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { uzbek, Uzbek } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Uzbek language spoken in Uzbekistan using the Latin script
 */
export interface IUzLatnUz extends ILocale {
  language: Uzbek;
  region: Uzbekistan;
  script: Latin;
}

/**
 * The locale variable for the Uzbek language spoken in Uzbekistan using the Latin script
 */
export const uzLatnUZ: IUzLatnUz = {
  language: uzbek,
  region: uzbekistan,
  script: latin
};

export default uzLatnUZ;
