import { IImmutable as ILocale } from '@lib/ILocale';
import { uyghur, Uyghur } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Uyghur language
 */
export interface IUg extends ILocale {
  language: Uyghur;
}

/**
 * The locale variable for the Uyghur language
 */
export const ug: IUg = {
  language: uyghur,
};

Object.freeze(ug);

export default ug;
