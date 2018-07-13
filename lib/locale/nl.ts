import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { dutch, Dutch } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Dutch language
 */
export interface INl extends ILocale {
  language: Dutch;
}

/**
 * The locale variable for the Dutch language
 */
export const nl: INl = {
  language: dutch,
};

freeze(nl);

export default nl;
