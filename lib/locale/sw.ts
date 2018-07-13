import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { swahili, Swahili } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Swahili language
 */
export interface ISw extends ILocale {
  language: Swahili;
}

/**
 * The locale variable for the Swahili language
 */
export const sw: ISw = {
  language: swahili,
};

freeze(sw);

export default sw;
