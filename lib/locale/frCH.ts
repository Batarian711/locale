import { IImmutable as ILocale } from '@lib/ILocale';
import { switzerland, Switzerland } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Switzerland
 */
export interface IFrCh extends ILocale {
  language: French;
  region: Switzerland;
}

/**
 * The locale variable for the French language spoken in Switzerland
 */
export const frCH: IFrCh = {
  language: french,
  region: switzerland,
};

export default frCH;
