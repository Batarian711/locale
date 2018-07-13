import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { nigeria, Nigeria } from '@lib/locale/Iso3166/Part1/Alpha2';
import { yoruba, Yoruba } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Yoruba language spoken in Nigeria
 */
export interface IYoNg extends ILocale {
  language: Yoruba;
  region: Nigeria;
}

/**
 * The locale variable for the Yoruba language spoken in Nigeria
 */
export const yoNG: IYoNg = {
  language: yoruba,
  region: nigeria,
};

freeze(yoNG);

export default yoNG;
