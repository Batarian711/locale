import { IImmutable as ILocale } from '@lib/ILocale';
import { pakistan, Pakistan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { punjabi, Punjabi } from '@lib/locale/Iso639/Part1';
import { arabic, Arabic } from '@lib/locale/Script';

/**
 * The locale interface for the Punjabi language spoken in Pakistan using the Arabic script
 */
export interface IPaArabPk extends ILocale {
  language: Punjabi;
  region: Pakistan;
  script: Arabic;
}

/**
 * The locale variable for the Punjabi language spoken in Pakistan using the Arabic script
 */
export const paArabPK: IPaArabPk = {
  language: punjabi,
  region: pakistan,
  script: arabic,
};

export default paArabPK;
