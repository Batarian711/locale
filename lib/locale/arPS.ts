import ILocale from '@lib/ILocale';
import { palestineStateOf, PalestineStateOf } from '@lib/locale/Iso3166/Part1/Alpha2';
import { arabic, Arabic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Arabic language spoken in Palestine, State of
 */
export interface IArPs extends ILocale {
  language: Arabic;
  region: PalestineStateOf;
}

/**
 * The locale variable for the Arabic language spoken in Palestine, State of
 */
export const arPS: IArPs = {
  language: arabic,
  region: palestineStateOf
};

export default arPS;
