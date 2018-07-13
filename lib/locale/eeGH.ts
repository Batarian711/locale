import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { ghana, Ghana } from '@lib/locale/Iso3166/Part1/Alpha2';
import { ewe, Ewe } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Ewe language spoken in Ghana
 */
export interface IEeGh extends ILocale {
  language: Ewe;
  region: Ghana;
}

/**
 * The locale variable for the Ewe language spoken in Ghana
 */
export const eeGH: IEeGh = {
  language: ewe,
  region: ghana,
};

freeze(eeGH);

export default eeGH;
