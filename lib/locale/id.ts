import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { indonesian, Indonesian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Indonesian language
 */
export interface IId extends ILocale {
  language: Indonesian;
}

/**
 * The locale variable for the Indonesian language
 */
export const id: IId = {
  language: indonesian,
};

freeze(id);

export default id;
