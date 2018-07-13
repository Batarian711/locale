import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { kannada, Kannada } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Kannada language
 */
export interface IKn extends ILocale {
  language: Kannada;
}

/**
 * The locale variable for the Kannada language
 */
export const kn: IKn = {
  language: kannada,
};

freeze(kn);

export default kn;
