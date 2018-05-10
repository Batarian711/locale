import ILocale from '@lib/ILocale';
import { norway, Norway } from '@lib/locale/Iso3166/Part1/Alpha2';
import { norwegian, Norwegian } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Norwegian language spoken in Norway
 */
export interface INoNo extends ILocale {
  language: Norwegian;
  region: Norway;
}

/**
 * The locale variable for the Norwegian language spoken in Norway
 */
export const noNO: INoNo = {
  language: norwegian,
  region: norway,
};

export default noNO;
