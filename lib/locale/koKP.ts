import { IImmutable as ILocale } from '@lib/ILocale';
import { democraticPeoplesRepublicOfKorea, DemocraticPeoplesRepublicOfKorea } from '@lib/locale/Iso3166/Part1/Alpha2';
import { korean, Korean } from '@lib/locale/Iso639/Part1';

/**
 * The locale interface for the Korean language spoken in Democratic Peoples Republic of Korea
 */
export interface IKoKp extends ILocale {
  language: Korean;
  region: DemocraticPeoplesRepublicOfKorea;
}

/**
 * The locale variable for the Korean language spoken in Democratic Peoples Republic of Korea
 */
export const koKP: IKoKp = {
  language: korean,
  region: democraticPeoplesRepublicOfKorea,
};

Object.freeze(koKP);

export default koKP;
