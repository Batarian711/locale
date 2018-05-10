import { IImmutable as ILocale } from '@lib/ILocale';
import { china, China } from '@lib/locale/Iso3166/Part1/Alpha2';
import { uyghur, Uyghur } from '@lib/locale/Iso639/Part1';
import { arabic, Arabic } from '@lib/locale/Script';

/**
 * The locale interface for the Uyghur language spoken in China using the Arabic script
 */
export interface IUgArabCn extends ILocale {
  language: Uyghur;
  region: China;
  script: Arabic;
}

/**
 * The locale variable for the Uyghur language spoken in China using the Arabic script
 */
export const ugArabCN: IUgArabCn = {
  language: uyghur,
  region: china,
  script: arabic,
};

Object.freeze(ugArabCN);

export default ugArabCN;
