import { IImmutable as ILocale } from '@lib/ILocale';
import { ghana, Ghana } from '@lib/locale/Iso3166/Part1/Alpha2';
import { hausa, Hausa } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Hausa language spoken in Ghana
 */
export interface IHaGh extends ILocale {
  language: Hausa;
  region: Ghana;
}

/**
 * The locale variable for the Hausa language spoken in Ghana
 */
export const haGH: IHaGh = {
  language: hausa,
  region: ghana,
};

Object.freeze(haGH);

export default haGH;
