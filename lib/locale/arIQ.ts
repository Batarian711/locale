import ILocale from '@lib/ILocale';
import { iraq, Iraq } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Iraq
 */
export interface IArIq extends ILocale {
  language: Arabic;
  region: Iraq;
}

/**
 * The locale variable for the Arabic language spoken in Iraq
 */
export const arIQ: IArIq = {
  language: arabic,
  region: iraq,
};

export default arIQ;
