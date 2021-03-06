import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { britishIndianOceanTerritory, BritishIndianOceanTerritory } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in British Indian Ocean Territory
 */
export interface IEnIo extends ILocale {
  language: English;
  region: BritishIndianOceanTerritory;
}

/**
 * The locale variable for the English language spoken in British Indian Ocean Territory
 */
export const enIO: IEnIo = {
  language: english,
  region: britishIndianOceanTerritory,
};

freeze(enIO);

export default enIO;
