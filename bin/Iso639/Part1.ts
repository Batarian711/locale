import Declaration, { IOptions as IDeclarationOptions } from '@bin/Declaration';
import IPart1 from '@bin/IIso639/IPart1';

// tslint:disable-next-line:no-empty-interface
export interface IOptions extends IDeclarationOptions { }

export default class Part1 extends Declaration implements IPart1 { }
