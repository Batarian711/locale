import { IImmutable as ILocale } from '@lib/ILocale';
import { niger, Niger } from '@lib/locale/Iso3166/Part1/Alpha2';
import { french, French } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the French language spoken in Niger
 */
export interface IFrNe extends ILocale {
  language: French;
  region: Niger;
}

/**
 * The locale variable for the French language spoken in Niger
 */
export const frNE: IFrNe = {
  language: french,
  region: niger,
};

Object.freeze(frNE);

export default frNE;
