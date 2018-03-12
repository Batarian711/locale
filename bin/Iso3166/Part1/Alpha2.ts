import Declaration, { IOptions as IDeclarationOptions } from '@bin/Declaration';
import IAlpha2 from '@bin/IIso3166/IPart1/IAlpha2';

// tslint:disable-next-line:no-empty-interface
export interface IOptions extends IDeclarationOptions { }

export default class Alpha2 extends Declaration implements IAlpha2 { }
