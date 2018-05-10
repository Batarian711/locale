import { IImmutable as ILocale } from '@lib/ILocale';
import { kashmiri, Kashmiri } from '@lib/locale/Iso639/Part1';
import { arabic, Arabic } from '@lib/locale/Script';

/**
 * The locale interface for the Kashmiri language using the Arabic script
 */
export interface IKsArab extends ILocale {
  language: Kashmiri;
  script: Arabic;
}

/**
 * The locale variable for the Kashmiri language using the Arabic script
 */
export const ksArab: IKsArab = {
  language: kashmiri,
  script: arabic,
};

export default ksArab;
