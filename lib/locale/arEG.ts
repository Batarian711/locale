import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { egypt, Egypt } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Egypt
 */
export interface IArEg extends ILocale {
  language: Arabic;
  region: Egypt;
}

/**
 * The locale variable for the Arabic language spoken in Egypt
 */
export const arEG: IArEg = {
  language: arabic,
  region: egypt,
};

freeze(arEG);

export default arEG;
