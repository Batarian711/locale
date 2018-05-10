import { IImmutable as ILocale } from '@lib/ILocale';
import { belgium, Belgium } from '@lib/locale/Iso3166/Part1/Alpha2';
import { german, German } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the German language spoken in Belgium
 */
export interface IDeBe extends ILocale {
  language: German;
  region: Belgium;
}

/**
 * The locale variable for the German language spoken in Belgium
 */
export const deBE: IDeBe = {
  language: german,
  region: belgium,
};

export default deBE;
