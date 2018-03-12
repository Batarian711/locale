import IPart1 from '@bin/IIso639/IPart1';
import typename from '@bin/typename';
import variable from '@bin/variable';

export interface IOptions extends Pick<IPart1, 'name' | 'value'>, Partial<Pick<IPart1, 'variable' | 'typename'>> { }

export default class Part1 implements IPart1 {
  name: string;
  variable: string;
  typename: string;
  value: string;

  constructor({ name, value, typename: t, variable: v }: IOptions) {
    this.name = name;
    this.value = value;
    this.variable = v || variable(name);
    this.typename = t || typename(name);
    if (!this.name) { throw new TypeError(`Declaration name must be a non-empty string`); }
    if (!this.value) { throw new TypeError(`Declaration value must be a non-empty string`); }
    if (!this.variable) { throw new TypeError(`Declaration variable must be a non-empty string`); }
    if (!this.typename) { throw new TypeError(`Declaration typename must be a non-empty string`); }
  }
}
