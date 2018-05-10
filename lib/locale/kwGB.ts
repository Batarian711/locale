import { IImmutable as ILocale } from '@lib/ILocale';
import {
  unitedKingdomOfGreatBritainAndNorthernIreland,
  UnitedKingdomOfGreatBritainAndNorthernIreland,
} from '@lib/locale/Iso3166/Part1/Alpha2';
import { cornish, Cornish } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Cornish language spoken in United Kingdom of Great Britain and Northern Ireland
 */
export interface IKwGb extends ILocale {
  language: Cornish;
  region: UnitedKingdomOfGreatBritainAndNorthernIreland;
}

/**
 * The locale variable for the Cornish language spoken in United Kingdom of Great Britain and Northern Ireland
 */
export const kwGB: IKwGb = {
  language: cornish,
  region: unitedKingdomOfGreatBritainAndNorthernIreland,
};

Object.freeze(kwGB);

export default kwGB;
