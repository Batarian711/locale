import ILocale from '@lib/ILocale';

import {
  english,
  English
} from '@lib/locale/Iso639/Part1';

import {
  unitedKingdomOfGreatBritainAndNorthernIreland,
  UnitedKingdomOfGreatBritainAndNorthernIreland
} from '@lib/locale/Iso3166/Part1/Alpha2';

export interface IEnGb extends ILocale { language: English; country: UnitedKingdomOfGreatBritainAndNorthernIreland; }
export const enGB: IEnGb = { language: english, country: unitedKingdomOfGreatBritainAndNorthernIreland };
export default enGB;
