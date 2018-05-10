import { IImmutable as ILocale } from '@lib/ILocale';
import { pakistan, Pakistan } from '@lib/locale/Iso3166/Part1/Alpha2';
import { urdu, Urdu } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Urdu language spoken in Pakistan
 */
export interface IUrPk extends ILocale {
  language: Urdu;
  region: Pakistan;
}

/**
 * The locale variable for the Urdu language spoken in Pakistan
 */
export const urPK: IUrPk = {
  language: urdu,
  region: pakistan,
};

Object.freeze(urPK);

export default urPK;
