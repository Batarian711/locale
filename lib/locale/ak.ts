import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { akan, Akan } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Akan language
 */
export interface IAk extends ILocale {
  language: Akan;
}

/**
 * The locale variable for the Akan language
 */
export const ak: IAk = {
  language: akan,
};

freeze(ak);

export default ak;
