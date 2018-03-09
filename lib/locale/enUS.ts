import ILocale from '@lib/ILocale';

import {
  english,
  English
} from '@lib/locale/Iso639/Part1';

import {
  unitedStatesOfAmerica,
  UnitedStatesOfAmerica
} from '@lib/locale/Iso3166/Part1/Alpha2';

export interface IEnUs extends ILocale { language: English; country: UnitedStatesOfAmerica; }
export const enUS: IEnUs = { language: english, country: unitedStatesOfAmerica };
export default enUS;
