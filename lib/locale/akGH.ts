import { IImmutable as ILocale } from '@lib/ILocale';
import { ghana, Ghana } from '@lib/locale/Iso3166/Part1/Alpha2';
import { akan, Akan } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Akan language spoken in Ghana
 */
export interface IAkGh extends ILocale {
  language: Akan;
  region: Ghana;
}

/**
 * The locale variable for the Akan language spoken in Ghana
 */
export const akGH: IAkGh = {
  language: akan,
  region: ghana,
};

Object.freeze(akGH);

export default akGH;
