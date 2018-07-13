import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { pakistan, Pakistan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { english, English } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the English language spoken in Pakistan
 */
export interface IEnPk extends ILocale {
  language: English;
  region: Pakistan;
}

/**
 * The locale variable for the English language spoken in Pakistan
 */
export const enPK: IEnPk = {
  language: english,
  region: pakistan,
};

freeze(enPK);

export default enPK;
