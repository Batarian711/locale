import { IImmutable as ILocale } from '@lib/ILocale';
import {
  unitedKingdomOfGreatBritainAndNorthernIreland,
  UnitedKingdomOfGreatBritainAndNorthernIreland,
} from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in United Kingdom of Great Britain and Northern Ireland
 */
export interface IEnGb extends ILocale {
  language: English;
  region: UnitedKingdomOfGreatBritainAndNorthernIreland;
}

/**
 * The locale variable for the English language spoken in United Kingdom of Great Britain and Northern Ireland
 */
export const enGB: IEnGb = {
  language: english,
  region: unitedKingdomOfGreatBritainAndNorthernIreland,
};

Object.freeze(enGB);

export default enGB;
