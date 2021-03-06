import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { welsh, Welsh } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Welsh language
 */
export interface ICy extends ILocale {
  language: Welsh;
}

/**
 * The locale variable for the Welsh language
 */
export const cy: ICy = {
  language: welsh,
};

freeze(cy);

export default cy;
