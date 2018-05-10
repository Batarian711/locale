import { IImmutable as ILocale } from '@lib/ILocale';
import { westernFrisian, WesternFrisian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Western Frisian language
 */
export interface IFy extends ILocale {
  language: WesternFrisian;
}

/**
 * The locale variable for the Western Frisian language
 */
export const fy: IFy = {
  language: westernFrisian,
};

Object.freeze(fy);

export default fy;
