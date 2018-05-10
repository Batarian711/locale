import ILocale from '@lib/ILocale';
import { cocosKeelingIslands, CocosKeelingIslands } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Cocos (Keeling) Islands
 */
export interface IEnCc extends ILocale {
  language: English;
  region: CocosKeelingIslands;
}

/**
 * The locale variable for the English language spoken in Cocos (Keeling) Islands
 */
export const enCC: IEnCc = {
  language: english,
  region: cocosKeelingIslands,
};

export default enCC;
