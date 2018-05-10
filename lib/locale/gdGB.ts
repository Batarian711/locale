import { IImmutable as ILocale } from '@lib/ILocale';
import {
  unitedKingdomOfGreatBritainAndNorthernIreland,
  UnitedKingdomOfGreatBritainAndNorthernIreland,
} from '@lib/locale/Iso3166/Part1/Alpha2';
import { scottishGaelic, ScottishGaelic } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Scottish Gaelic language spoken in United Kingdom of Great Britain and Northern
 * Ireland
 */
export interface IGdGb extends ILocale {
  language: ScottishGaelic;
  region: UnitedKingdomOfGreatBritainAndNorthernIreland;
}

/**
 * The locale variable for the Scottish Gaelic language spoken in United Kingdom of Great Britain and Northern
 * Ireland
 */
export const gdGB: IGdGb = {
  language: scottishGaelic,
  region: unitedKingdomOfGreatBritainAndNorthernIreland,
};

Object.freeze(gdGB);

export default gdGB;
