export type UnitedKingdomOfGreatBritainAndNorthernIreland = 'GB';
export const unitedKingdomOfGreatBritainAndNorthernIreland: UnitedKingdomOfGreatBritainAndNorthernIreland = 'GB';

export type UnitedStatesOfAmerica = 'US';
export const unitedStatesOfAmerica: UnitedStatesOfAmerica = 'US';

/**
 * ISO3166-1 country code
 * @see https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes
 */
type Part1 =
  UnitedKingdomOfGreatBritainAndNorthernIreland |
  UnitedStatesOfAmerica;

export default Part1;
