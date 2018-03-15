import ILocale from '@lib/ILocale';
import { saintPierreAndMiquelon, SaintPierreAndMiquelon } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Saint Pierre and Miquelon
 */
export interface IFrPm extends ILocale {
  language: French;
  region: SaintPierreAndMiquelon;
}

/**
 * The locale variable for the French language spoken in Saint Pierre and Miquelon
 */
export const frPM: IFrPm = {
  language: french,
  region: saintPierreAndMiquelon
};

export default frPM;
