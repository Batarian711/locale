import { IImmutable as ILocale } from '@lib/ILocale';
import { afghanistan, Afghanistan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { uzbek, Uzbek } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Uzbek language spoken in Afghanistan
 */
export interface IUzAf extends ILocale {
  language: Uzbek;
  region: Afghanistan;
}

/**
 * The locale variable for the Uzbek language spoken in Afghanistan
 */
export const uzAF: IUzAf = {
  language: uzbek,
  region: afghanistan,
};

export default uzAF;
