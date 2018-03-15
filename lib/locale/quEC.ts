import ILocale from '@lib/ILocale';
import { ecuador, Ecuador } from '@lib/locale/Iso3166/Part1/Alpha2';
import { quechua, Quechua } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Quechua language spoken in Ecuador
 */
export interface IQuEc extends ILocale {
  language: Quechua;
  region: Ecuador;
}

/**
 * The locale variable for the Quechua language spoken in Ecuador
 */
export const quEC: IQuEc = {
  language: quechua,
  region: ecuador
};

export default quEC;
