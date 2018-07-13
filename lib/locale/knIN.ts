import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { kannada, Kannada } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Kannada language spoken in India
 */
export interface IKnIn extends ILocale {
  language: Kannada;
  region: India;
}

/**
 * The locale variable for the Kannada language spoken in India
 */
export const knIN: IKnIn = {
  language: kannada,
  region: india,
};

freeze(knIN);

export default knIN;
