import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { swedish, Swedish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Swedish language
 */
export interface ISv extends ILocale {
  language: Swedish;
}

/**
 * The locale variable for the Swedish language
 */
export const sv: ISv = {
  language: swedish,
};

freeze(sv);

export default sv;
