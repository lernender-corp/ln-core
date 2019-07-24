import {Simple} from "../common/simple";

export declare class Token extends Simple {
	public token: string;
  public hasToken();
  public hasTokenExpired();
  constructor();
  constructor(options?: Object);
}
