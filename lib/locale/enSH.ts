import ILocale from '@lib/ILocale';
import {
  saintHelenaAscensionAndTristanDaCunha,
  SaintHelenaAscensionAndTristanDaCunha,
} from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Saint Helena, Ascension and Tristan da Cunha
 */
export interface IEnSh extends ILocale {
  language: English;
  region: SaintHelenaAscensionAndTristanDaCunha;
}

/**
 * The locale variable for the English language spoken in Saint Helena, Ascension and Tristan da Cunha
 */
export const enSH: IEnSh = {
  language: english,
  region: saintHelenaAscensionAndTristanDaCunha,
};

export default enSH;
