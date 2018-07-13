import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { fiji, Fiji } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Fiji
 */
export interface IEnFj extends ILocale {
  language: English;
  region: Fiji;
}

/**
 * The locale variable for the English language spoken in Fiji
 */
export const enFJ: IEnFj = {
  language: english,
  region: fiji,
};

freeze(enFJ);

export default enFJ;
