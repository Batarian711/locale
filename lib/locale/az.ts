import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { azerbaijani, Azerbaijani } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Azerbaijani language
 */
export interface IAz extends ILocale {
  language: Azerbaijani;
}

/**
 * The locale variable for the Azerbaijani language
 */
export const az: IAz = {
  language: azerbaijani,
};

freeze(az);

export default az;
