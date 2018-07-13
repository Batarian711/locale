import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { democraticRepublicOfTheCongo, DemocraticRepublicOfTheCongo } from '@lib/locale/Iso3166/Part1/Alpha2';
import { lubaKatanga, LubaKatanga } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Luba-Katanga language spoken in Democratic Republic of the Congo
 */
export interface ILuCd extends ILocale {
  language: LubaKatanga;
  region: DemocraticRepublicOfTheCongo;
}

/**
 * The locale variable for the Luba-Katanga language spoken in Democratic Republic of the Congo
 */
export const luCD: ILuCd = {
  language: lubaKatanga,
  region: democraticRepublicOfTheCongo,
};

freeze(luCD);

export default luCD;
