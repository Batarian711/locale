import IIso3166 from './IIso3166';
import IIso639 from './IIso639';
import ILocale from './ILocale';
import IScript from './IScript';

export default interface IData {
  iso639: IIso639;
  iso3166: IIso3166;
  script: Array<IScript>;
  locale: Array<ILocale>;
}
