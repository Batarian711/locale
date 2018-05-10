import { IImmutable as ILocale } from '@lib/ILocale';
import { chad, Chad } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Chad
 */
export interface IArTd extends ILocale {
  language: Arabic;
  region: Chad;
}

/**
 * The locale variable for the Arabic language spoken in Chad
 */
export const arTD: IArTd = {
  language: arabic,
  region: chad,
};

export default arTD;
