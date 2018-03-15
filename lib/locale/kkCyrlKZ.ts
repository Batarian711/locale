import ILocale from '@lib/ILocale';
import { kazakhstan, Kazakhstan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { kazakh, Kazakh } from '@lib/locale/Iso639/Part1';
import { cyrillic, Cyrillic } from '@lib/locale/Script';

/**
 * The locale interface for the Kazakh language spoken in Kazakhstan using the Cyrillic script
 */
export interface IKkCyrlKz extends ILocale {
  language: Kazakh;
  region: Kazakhstan;
  script: Cyrillic;
}

/**
 * The locale variable for the Kazakh language spoken in Kazakhstan using the Cyrillic script
 */
export const kkCyrlKZ: IKkCyrlKz = {
  language: kazakh,
  region: kazakhstan,
  script: cyrillic
};

export default kkCyrlKZ;
