import { IImmutable as ILocale } from '@lib/ILocale';
import { poland, Poland } from '@lib/locale/Iso3166/Part1/Alpha2';
import { polish, Polish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Polish language spoken in Poland
 */
export interface IPlPl extends ILocale {
  language: Polish;
  region: Poland;
}

/**
 * The locale variable for the Polish language spoken in Poland
 */
export const plPL: IPlPl = {
  language: polish,
  region: poland,
};

Object.freeze(plPL);

export default plPL;
