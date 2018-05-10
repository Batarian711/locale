import ILocale from '@lib/ILocale';
import { northernNdebele, NorthernNdebele } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Northern Ndebele language
 */
export interface INd extends ILocale {
  language: NorthernNdebele;
}

/**
 * The locale variable for the Northern Ndebele language
 */
export const nd: INd = {
  language: northernNdebele,
};

export default nd;
