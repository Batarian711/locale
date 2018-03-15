import ILocale from '@lib/ILocale';
import { germany, Germany } from '@lib/locale/Iso3166/Part1/Alpha2';
import { german, German } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the German language spoken in Germany
 */
export interface IDeDe extends ILocale {
  language: German;
  region: Germany;
}

/**
 * The locale variable for the German language spoken in Germany
 */
export const deDE: IDeDe = {
  language: german,
  region: germany
};

export default deDE;
