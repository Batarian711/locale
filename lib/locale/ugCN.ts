import ILocale from '@lib/ILocale';
import { china, China } from '@lib/locale/Iso3166/Part1/Alpha2';
import { uyghur, Uyghur } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Uyghur language spoken in China
 */
export interface IUgCn extends ILocale {
  language: Uyghur;
  region: China;
}

/**
 * The locale variable for the Uyghur language spoken in China
 */
export const ugCN: IUgCn = {
  language: uyghur,
  region: china,
};

export default ugCN;
