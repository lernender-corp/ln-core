import * as Constant from '../constant';
//
// Class :  GridToken
//
export class GridToken {

	public get(): any;
	public hasToken(): boolean;
	public isNumber();
	public isString();
	public clear(): void;
	public set(tokens? :string[]): void;
  public isBoolean();
  public isDate();

	public enabled: boolean;

	readonly type: number;
	readonly dataType: string;
	readonly dirty: boolean;
	readonly disabled: boolean;
	readonly equality: Constant.Equality;
	readonly errors: any[];
	readonly invalid: boolean;
	readonly pending: boolean;
	readonly pristine: boolean;
	readonly touched: boolean;
	readonly untouched: boolean;
	readonly valid: boolean;
	readonly value: any;

  constructor();
  constructor(options: Object);
  constructor(options?: any);
}
