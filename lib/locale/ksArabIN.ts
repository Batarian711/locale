import { IImmutable as ILocale } from '@lib/ILocale';
import { india, India } from '@lib/locale/Iso3166/Part1/Alpha2';
import { kashmiri, Kashmiri } from '@lib/locale/Iso639/Part1';
import { arabic, Arabic } from '@lib/locale/Script';

/**
 * The locale interface for the Kashmiri language spoken in India using the Arabic script
 */
export interface IKsArabIn extends ILocale {
  language: Kashmiri;
  region: India;
  script: Arabic;
}

/**
 * The locale variable for the Kashmiri language spoken in India using the Arabic script
 */
export const ksArabIN: IKsArabIn = {
  language: kashmiri,
  region: india,
  script: arabic,
};

export default ksArabIN;
