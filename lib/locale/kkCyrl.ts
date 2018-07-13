import { freeze } from '@lib/freeze';
import { IImmutable as ILocale } from '@lib/ILocale';
import { kazakh, Kazakh } from '@lib/locale/Iso639/Part1';
import { cyrillic, Cyrillic } from '@lib/locale/Script';

/**
 * The locale interface for the Kazakh language using the Cyrillic script
 */
export interface IKkCyrl extends ILocale {
  language: Kazakh;
  script: Cyrillic;
}

/**
 * The locale variable for the Kazakh language using the Cyrillic script
 */
export const kkCyrl: IKkCyrl = {
  language: kazakh,
  script: cyrillic,
};

freeze(kkCyrl);

export default kkCyrl;
