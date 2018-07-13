import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { caboVerde, CaboVerde } from '@lib/locale/Iso3166/Part1/Alpha2';
import { portuguese, Portuguese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Portuguese language spoken in Cabo Verde
 */
export interface IPtCv extends ILocale {
  language: Portuguese;
  region: CaboVerde;
}

/**
 * The locale variable for the Portuguese language spoken in Cabo Verde
 */
export const ptCV: IPtCv = {
  language: portuguese,
  region: caboVerde,
};

freeze(ptCV);

export default ptCV;
