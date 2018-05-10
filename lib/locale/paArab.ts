import { IImmutable as ILocale } from '@lib/ILocale';
import { punjabi, Punjabi } from '@lib/locale/Iso639/Part1';
import { arabic, Arabic } from '@lib/locale/Script';

/**
 * The locale interface for the Punjabi language using the Arabic script
 */
export interface IPaArab extends ILocale {
  language: Punjabi;
  script: Arabic;
}

/**
 * The locale variable for the Punjabi language using the Arabic script
 */
export const paArab: IPaArab = {
  language: punjabi,
  script: arabic,
};

Object.freeze(paArab);

export default paArab;
