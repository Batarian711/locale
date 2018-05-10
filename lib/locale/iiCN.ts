import { IImmutable as ILocale } from '@lib/ILocale';
import { china, China } from '@lib/locale/Iso3166/Part1/Alpha2';
import { nuosu, Nuosu } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Nuosu language spoken in China
 */
export interface IIiCn extends ILocale {
  language: Nuosu;
  region: China;
}

/**
 * The locale variable for the Nuosu language spoken in China
 */
export const iiCN: IIiCn = {
  language: nuosu,
  region: china,
};

export default iiCN;
