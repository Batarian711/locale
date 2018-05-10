import { IImmutable as ILocale } from '@lib/ILocale';
import { lithuania, Lithuania } from '@lib/locale/Iso3166/Part1/Alpha2';
import { lithuanian, Lithuanian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Lithuanian language spoken in Lithuania
 */
export interface ILtLt extends ILocale {
  language: Lithuanian;
  region: Lithuania;
}

/**
 * The locale variable for the Lithuanian language spoken in Lithuania
 */
export const ltLT: ILtLt = {
  language: lithuanian,
  region: lithuania,
};

export default ltLT;
