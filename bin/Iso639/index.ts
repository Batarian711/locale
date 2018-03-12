import IIso639 from '@bin/IIso639';
import IPart1 from '@bin/IIso639/IPart1';
import Part1, { IOptions as IPart1Options } from '@bin/Iso639/Part1';

function isIPart1(value: IPart1 | IPart1Options): value is IPart1 {
  // tslint:disable-next-line:strict-type-predicates
  return (value as IPart1).variable !== undefined && (value as IPart1).typename !== undefined;
}

export interface IOptions {
  part1: Array<IPart1 | IPart1Options>;
}

export default class Iso639 implements IIso639 {
  part1: Array<IPart1>;

  constructor({ part1 }: IOptions) {
    this.part1 = part1.map(o => isIPart1(o) ? o : new Part1(o));
  }
}
