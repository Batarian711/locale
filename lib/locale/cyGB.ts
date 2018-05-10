import ILocale from '@lib/ILocale';
import {
  unitedKingdomOfGreatBritainAndNorthernIreland,
  UnitedKingdomOfGreatBritainAndNorthernIreland,
} from '@lib/locale/Iso3166/Part1/Alpha2';
import { welsh, Welsh } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Welsh language spoken in United Kingdom of Great Britain and Northern Ireland
 */
export interface ICyGb extends ILocale {
  language: Welsh;
  region: UnitedKingdomOfGreatBritainAndNorthernIreland;
}

/**
 * The locale variable for the Welsh language spoken in United Kingdom of Great Britain and Northern Ireland
 */
export const cyGB: ICyGb = {
  language: welsh,
  region: unitedKingdomOfGreatBritainAndNorthernIreland,
};

export default cyGB;
