import ILocale from '@lib/ILocale';
import { bhutan, Bhutan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { dzongkha, Dzongkha } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Dzongkha language spoken in Bhutan
 */
export interface IDzBt extends ILocale {
  language: Dzongkha;
  region: Bhutan;
}

/**
 * The locale variable for the Dzongkha language spoken in Bhutan
 */
export const dzBT: IDzBt = {
  language: dzongkha,
  region: bhutan,
};

export default dzBT;
