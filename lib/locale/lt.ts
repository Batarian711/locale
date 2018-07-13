import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { lithuanian, Lithuanian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Lithuanian language
 */
export interface ILt extends ILocale {
  language: Lithuanian;
}

/**
 * The locale variable for the Lithuanian language
 */
export const lt: ILt = {
  language: lithuanian,
};

freeze(lt);

export default lt;
