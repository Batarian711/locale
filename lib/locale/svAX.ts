import { IImmutable as ILocale } from '@lib/ILocale';
import { alandIslands, AlandIslands } from '@lib/locale/Iso3166/Part1/Alpha2';
import { swedish, Swedish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Swedish language spoken in Åland Islands
 */
export interface ISvAx extends ILocale {
  language: Swedish;
  region: AlandIslands;
}

/**
 * The locale variable for the Swedish language spoken in Åland Islands
 */
export const svAX: ISvAx = {
  language: swedish,
  region: alandIslands,
};

export default svAX;
