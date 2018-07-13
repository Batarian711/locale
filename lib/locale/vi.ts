import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { vietnamese, Vietnamese } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Vietnamese language
 */
export interface IVi extends ILocale {
  language: Vietnamese;
}

/**
 * The locale variable for the Vietnamese language
 */
export const vi: IVi = {
  language: vietnamese,
};

freeze(vi);

export default vi;
