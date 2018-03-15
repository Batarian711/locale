import ILocale from '@lib/ILocale';
import { uyghur, Uyghur } from '@lib/locale/Iso639/Part1';
import { arabic, Arabic } from '@lib/locale/Script';

/**
 * The locale interface for the Uyghur language using the Arabic script
 */
export interface IUgArab extends ILocale {
  language: Uyghur;
  script: Arabic;
}

/**
 * The locale variable for the Uyghur language using the Arabic script
 */
export const ugArab: IUgArab = {
  language: uyghur,
  script: arabic
};

export default ugArab;
