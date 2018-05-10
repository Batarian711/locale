import { IImmutable as ILocale } from '@lib/ILocale';
import { slovakia, Slovakia } from '@lib/locale/Iso3166/Part1/Alpha2';
import { slovak, Slovak } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Slovak language spoken in Slovakia
 */
export interface ISkSk extends ILocale {
  language: Slovak;
  region: Slovakia;
}

/**
 * The locale variable for the Slovak language spoken in Slovakia
 */
export const skSK: ISkSk = {
  language: slovak,
  region: slovakia,
};

export default skSK;
