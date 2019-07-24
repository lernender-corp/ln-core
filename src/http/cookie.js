import { assignWith } from 'lodash-es';
import * as Library from '../library/index';
import { CookieOption } from './cookieOption';

export class Cookie {
  /**
   * get
   * @param key
   * @returns {any}
   */
  get(key) {
    //
    // If the Key Exists
    //
    if (Library.isStringWithLength(key)) {
      if (Library.hasOwnProperty(this._readCookie(), key)) {
        const value = this._readCookie()[key];
        return Library.isObject(JSON.parse(value)) ? JSON.parse(value) : value;
      }
    }
  }

  /**
   * getAll()
   * @returns {any}
   */
  getAll() {
    return this._readCookie();
  }

  /**
   * put()
   * @param key
   * @param value
   * @param options
   */
  put(key, value, options) {
    if (Library.isObject(value)) {
      value = JSON.stringify(value);
    }

    this._writeCookie()(key, value, options);
  }

  /**
   * remove()
   * @param key
   * @param options
   */
  remove(key, options = {}) {
    this._writeCookie()(key, undefined, options);
  }

  /**
   * removeAll()
   */
  removeAll() {
    const cookies = this.getAll();
    Object.keys(cookies).forEach(key => {
      this.remove(key);
    });
  }

  /**
   * _writeCookie()
   * @returns {function(string, string, CookieOption=): undefined}
   * @private
   */
  _writeCookie() {
    const that = this;
    const rawDocument = document;

    return (name, value, options) => {
      rawDocument.cookie = that._buildCookieString(name, value, options);
    };
  }

  /**
   * _buildCookieString()
   * @param name
   * @param value
   * @param options
   * @returns {string}
   * @private
   */
  _buildCookieString(name, value, options) {
    const cookiePath = '/';
    const defaultOpts = new CookieOption({ path: cookiePath });
    const opts = assignWith(defaultOpts, options);
    let expires;

    expires = opts.expires;

    if (!Library.isStringWithLength(value)) {
      expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
      value = '';
    }

    if (Library.isStringWithLength(expires)) {
      expires = new Date(expires);
    }

    let str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    str += opts.path ? ';path=' + opts.path : '';
    str += opts.domain ? ';domain=' + opts.domain : '';
    str += expires ? ';expires=' + expires.toUTCString() : '';
    str += opts.secure ? ';secure' : '';

    // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
    // - 300 cookies
    // - 20 cookies per unique domain
    // - 4096 bytes per cookie
    const cookieLength = str.length + 1;
    if (cookieLength > 4096) {
      console.log(
        `CookieOption \'${name}\' possibly not set or overflowed because it was too large (${cookieLength} > 4096 bytes)!`
      );
    }

    return str;
  }

  /**
   *
   * @returns {{}}
   * @private
   */
  _readCookie() {
    const that = this;
    const rawDocument = document;
    let lastCookies = {};
    let lastCookieString = '';

    let cookieArray;
    let cookie;
    let i;
    let index;
    let name;

    const currentCookieString = rawDocument.cookie || '';
    if (currentCookieString !== lastCookieString) {
      lastCookieString = currentCookieString;
      cookieArray = lastCookieString.split('; ');
      lastCookies = {};

      for (i = 0; i < cookieArray.length; i++) {
        cookie = cookieArray[i];
        index = cookie.indexOf('=');
        if (index > 0) {
          // ignore nameless cookies
          name = that._safeDecodeURIComponent(cookie.substring(0, index));
          // the first value that is seen for a cookie is the most
          // specific one.  values for the same cookie name that
          // follow are for less specific paths.
          if (!Library.isStringWithLength(lastCookies[name])) {
            lastCookies[name] = that._safeDecodeURIComponent(
              cookie.substring(index + 1)
            );
          }
        }
      }
    }
    return lastCookies;
  }

  /**
   *
   * @param str
   * @returns {string}
   * @private
   */
  _safeDecodeURIComponent(str) {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  }

  /**
   * Function: constructor()
   * @constructor
   */
  constructor() {}
}
