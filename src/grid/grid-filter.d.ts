import * as Constant from '../constant';
import {GridToken} from './grid-token';

//
// Class :  GridFilter
//
export class GridFilter {

	public hasFocus(): boolean;
	public hasTokens(): boolean;
	public clear(type: number, tokens?: any): void;
	public setTokens(type: number, tokens?: any);

	public enabled: boolean;
	public focus: boolean;
	public style: object;
	public type: number;

	readonly tokens: GridToken[];
	readonly dataType: string;
	readonly dirty: boolean;
	readonly disabled: boolean;
	readonly invalid: boolean;
	readonly pending: boolean;
	readonly pristine: boolean;
	readonly touched: boolean;
	readonly hidden: boolean;
	readonly untouched: boolean;
	readonly valid: boolean;

  constructor();
  constructor(options: Object);
  constructor(options?: any);
}
