import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { unitedStatesOfAmerica, UnitedStatesOfAmerica } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in United States of America
 */
export interface IEnUs extends ILocale {
  language: English;
  region: UnitedStatesOfAmerica;
}

/**
 * The locale variable for the English language spoken in United States of America
 */
export const enUS: IEnUs = {
  language: english,
  region: unitedStatesOfAmerica,
};

freeze(enUS);

export default enUS;
