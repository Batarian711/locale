import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { quechua, Quechua } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Quechua language
 */
export interface IQu extends ILocale {
  language: Quechua;
}

/**
 * The locale variable for the Quechua language
 */
export const qu: IQu = {
  language: quechua,
};

freeze(qu);

export default qu;
