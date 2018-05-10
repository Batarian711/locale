import ILocale from '@lib/ILocale';
import { finnish, Finnish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Finnish language
 */
export interface IFi extends ILocale {
  language: Finnish;
}

/**
 * The locale variable for the Finnish language
 */
export const fi: IFi = {
  language: finnish,
};

export default fi;
