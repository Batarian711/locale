import ILocale from '@lib/ILocale';
import { papuaNewGuinea, PapuaNewGuinea } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Papua New Guinea
 */
export interface IEnPg extends ILocale {
  language: English;
  region: PapuaNewGuinea;
}

/**
 * The locale variable for the English language spoken in Papua New Guinea
 */
export const enPG: IEnPg = {
  language: english,
  region: papuaNewGuinea
};

export default enPG;
