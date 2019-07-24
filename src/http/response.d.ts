import {Error} from './error';

export declare class Response {
  public data: any;
  public total: number;
  public errors: Error[];
  hasErrors():  boolean;
  hasData():  boolean;
  constructor();
  constructor(options?: Object);
  constructor(options?: Object, map?: any);
  constructor(options?: Object, map?: any, pagination?: any);
}
