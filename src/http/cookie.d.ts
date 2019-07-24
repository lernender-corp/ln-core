import {CookieOption} from './cookieOption';

/**
 * @class Base
 * @description Base level class
 */
export declare class Cookie {
  get(key: string): any;
  getAll(): any[];
  put(key: string, value: any, options: CookieOption)
  remove(key: string, options: CookieOption)
  removeAll();
  private _writeCookie() : any;
  private _buildCookieString() : string;
  private _readCookie() : any;
  private _safeDecodeURIComponent() : string;
  constructor();
  constructor(options: Object);
}
