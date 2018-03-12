import Declaration, { IOptions as IDeclarationOptions } from '@bin/Declaration';
import IScript from '@bin/IScript';

// tslint:disable-next-line:no-empty-interface
export interface IOptions extends IDeclarationOptions { }

export default class Script extends Declaration implements IScript { }
