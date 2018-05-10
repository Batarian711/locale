import { IImmutable as ILocale } from '@lib/ILocale';
import { ghana, Ghana } from '@lib/locale/Iso3166/Part1/Alpha2';
import { hausa, Hausa } from '@lib/locale/Iso639/Part1';
import { latin, Latin } from '@lib/locale/Script';

/**
 * The locale interface for the Hausa language spoken in Ghana using the Latin script
 */
export interface IHaLatnGh extends ILocale {
  language: Hausa;
  region: Ghana;
  script: Latin;
}

/**
 * The locale variable for the Hausa language spoken in Ghana using the Latin script
 */
export const haLatnGH: IHaLatnGh = {
  language: hausa,
  region: ghana,
  script: latin,
};

Object.freeze(haLatnGH);

export default haLatnGH;
