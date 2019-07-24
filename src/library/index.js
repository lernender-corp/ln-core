
/**
 * isNull()
 * @param o
 * @returns {boolean}
 */
export function isNull(o) {
  return (o === null);
}

/**
 * isUndefined()
 * @param o
 * @returns {boolean}
 */
export function isUndefined(o) {
  return (o === undefined);
}

/**
 * isNullOrUndefined()
 * @param o
 * @returns {boolean}
 */
export function isNullOrUndefined(o) {
  return (isNull(o) || isUndefined(o));
}

/**
 * isDefined()
 * @param o
 * @returns {boolean}
 */
export function isDefined(o) {
  return (!isNullOrUndefined(o));
}

/**
 * isObject()
 * @param o
 * @returns {boolean}
 */
export function isObject(o) {
  if (isDefined(o)) return (typeof o === 'object');
  return false;
}

/**
 * isFunction()
 * @param f
 * @returns {boolean}
 */
export function isFunction(f) {
  return (isDefined(f) && typeof f === 'function');
}

/**
 * isNumber()
 * @param o
 * @returns {boolean}
 */
export function isNumber(o) {
  return !isNaN(parseFloat(o)) && isFinite(o);
}

/**
 * isDecimal()
 * @param o
 * @returns {*|boolean}
 */
export function isDecimal(o) {
  return (isNumber(o) && (o % 1 !== 0));
}


/**
 * isString
 * @param o
 * @returns {boolean}
 */
export function isString(o) {
  return (isDefined(o) && typeof o === 'string');
}

/**
 * isEmpty()
 * @param o
 * @returns {boolean}
 */
export function isEmpty(o) {

  if (isString(o)) {
    return o === '';
  } else if (isObject(o)) {
    if (Array.isArray(o)) {
      return o.length === 0;
    } else if (isDate(o)) {
      return isNullOrUndefined(o);
    } else {
      return (Object.getOwnPropertyNames(o).length === 0);
    }
  }

  return false;
}

/**
 * startsWith()
 * @param o
 * @returns {boolean}
 */
export function startsWith(exp, val) {
  return (new RegExp(`^${exp}`, 'gim').test(val));
}
/**
 * startsWithWord()
 * @param o
 * @returns {boolean}
 */
export function startsWithWord(exp, val) {
  return (new RegExp(`\b${exp}\b`, 'gim').test(val));
}

/**
 * exactMatch()
 * @param o
 * @returns {boolean}
 */

export function exactMatch(exp, val) {
  let regex = '\\b';
  regex += exp.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  regex += '\\b';
  return (new RegExp(regex, "i").test(val));
}

/**
 * endsWith()
 * @param o
 * @returns {boolean}
 */
export function endsWith(exp, val) {
  return (new RegExp(`${exp}$`, 'gim').test(val));
}
/**
 * exact()
 * @param o
 * @returns {boolean}
 */
export function exact(exp, val) {
  return (new RegExp(`^${exp}$`, 'gi').test(val));
}
/**
 * contains()
 * @param o
 * @returns {boolean}
 */
export function contains(exp, val) {
  return (new RegExp(`${exp}`, 'i').test(val));
}

/**
 * camelCase()
 * @param o
 * @returns {string}
 */
export function camelCase(o) {

  if (isStringWithLength(o)) {
    return o
      .replace(/\s(.)/g, ($1) => {
        return $1.toUpperCase();
      })
      .replace(/\s/g, '')
      .replace(/^(.)/, ($1) => {
        return $1.toLowerCase();
      });
  }

  return o;
}

/**
 * isStringWithLength()
 * @param o
 * @returns {boolean}
 */
export function isStringWithLength(o) {
  return (isString(o) && o.length > 0);
}


/**
 * isArray()
 * @param o
 * @returns {boolean}
 */
export function isArray(o) {
  return (isDefined(o) && Array.isArray(o));
}

/**
 * isArrayWithLength()
 * @param o
 * @returns {boolean}
 */
export function isArrayWithLength(o) {
  return (isArray(o) && o.length > 0);
}

/**
 * isTrue()
 * @param o
 * @returns {boolean}
 */
export function isTrue(o) {
  return (isDefined(o) && typeof o === 'boolean' && o === true);
}

/**
 * isFalse()
 * @param o
 * @returns {boolean}
 */
export function isFalse(o) {
  return (isDefined(o) && typeof o === 'boolean' && o === false);
}

/**
 * isEnum()
 * @param o
 * @returns {boolean}
 */
export function isEnum(e, o) {
  return isDefined(e) && isDefined(o) && isFunction(e.keys) && isFunction(e.symbols)
    && isFunction(e.contains) && e.contains(o);
}

/**
 * isBoolean()
 * @param o
 * @returns {boolean}
 */
export function isBoolean(o) {
  return (isTrue(o) || isFalse(o));
}

/**
 * hasOwnProperty()
 * @param o
 * @param prop
 * @returns {boolean|Object}
 */
export function hasOwnProperty(o, prop) {
  return (isDefined(o) && (o.hasOwnProperty(prop)));
}

/**
 * init()
 * @param obj
 * @param prop
 * @param value
 * @returns {undefined}
 */
export function init(obj, prop, value = undefined) {
  return (hasOwnProperty(obj, prop) ? obj[prop] : value);
}

/**
 * replaceKeyValueWithString()
 * @param {*} o
 * @param {*} obj
 * @returns {any}
 */
export function replaceKeyValueWithString(o, obj) {
  let val = '';

  if (isStringWithLength(o)) {
    if (isObject(obj)) {
      if (!Object.entries) {
        Object.entries = function (entObj) {
          const ownProps = Object.keys(entObj);
          let i = ownProps.length;
          const resArray = new Array(i); // preallocate the Array
          while (i--) {
            resArray[i] = [ownProps[i], entObj[ownProps[i]]];
          }
          return resArray;
        };
      }
      val = o;
      Object.entries(obj).forEach(([key, value]) => {
        const exp = new RegExp(`${key}`, 'i');
        if (exp.test(val)) {
          val = val.replace(exp, value);
        }
      });
    }
  }

  return val;
}

/**
 * isDate()
 * @param o
 * @returns {boolean}
 */
export function isDate(o) {
  if (isDefined(o)) {
    return (!isNaN((new Date(o)).valueOf()));
  }
  return false;
}

/**
 * findItem()
 * @param items
 * @param obj
 * @param prop
 * @returns {*}
 */
export function findItem(items, obj, prop = 'id') {
  if (isArrayWithLength(items)) {
    let nIndex = -1;

    if (isObject(obj)) {
      nIndex = items.findIndex((i) => {
        return i[prop] === obj[prop];
      });
    } else if (isStringWithLength(obj) || isNumber(obj)) {
      nIndex = items.findIndex((i) => {
        return i[prop] === obj;
      });
    }

    if (nIndex > -1) {
      return items[nIndex];
    }
  }
}

/**
 * standardTime()
 * @param o
 * @returns {Date}
 */
export function localeTime(o, local = 'en-US') {
  if (isDate(o)) {
    return o.toLocaleTimeString(local);
  }
}

/**
 * wordCount()
 * @param s
 * @returns {number}
 * @constructor
 */
export function wordCount(s) {
  return (isStringWithLength(s) ? s.split(/\b\W+\b/).length : 0);
}

/**
 * isLTR()
 * Returns whether the page is in LTR mode. Defaults to `true` if it can't be computed.
 * @returns {boolean}
 */
export function isLTR() {
  let dir = 'ltr';

  if (typeof window !== 'undefined') {
    if (window.getComputedStyle) {
      dir = window.getComputedStyle(document.body, null).getPropertyValue('direction');
    } else {
      dir = document.body['currentStyle'].direction;
    }
  }

  return dir === 'ltr';
}

/**
 * isIOS()
 * Returns whether or not the current device is an iOS device.
 * @returns {boolean}
 */
export function isIOS() {
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
  }

  return false;
}

/**
 * isBrowser()
 * Detects whether or not we are running in a browser context or not.
 * @returns {*}
 */
export function isBrowser() {
  return new Function('try{return this===window;}catch(e){return false;}')();
}

export function isChromeBrowser() {
  return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
}

export function isSafariBrowser() {
  return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
}

export function isDateObject(o) {
  if (isObject(o)) {
    return (hasOwnProperty(o, 'year') &&
      hasOwnProperty(o, 'month') &&
      hasOwnProperty(o, 'dayOfMonth') &&
      hasOwnProperty(o, 'hourOfDay') &&
      hasOwnProperty(o, 'minute') &&
      hasOwnProperty(o, 'second'));
  }

  return false;
}

/**
 * isWithin24Hours()
 * @param o
 * @returns {boolean}
 */
export function isWithin24Hours(o) {
  if (isDate(o)) {
    const differenceInDates = Math.abs(
      Math.ceil((new Date().getTime() - o.getTime()) / (1000 * 3600 * 24))
    );
    return differenceInDates === 0 || differenceInDates === 1;
  } else {
    return false;
  }
}

export function toDate(o) {
  if (isDateObject(o)) {
    return new Date(parseInt(o['year'].toString(), 10),
      parseInt(o['month'].toString(), 10),
      parseInt(o['dayOfMonth'].toString(), 10),
      parseInt(o['hourOfDay'].toString(), 10),
      parseInt(o['minute'].toString(), 10),
      parseInt(o['second'].toString(), 10));
  }
  return undefined;
}

export function parseDate(o) {
  if (isDefined(o) && isDate(o)) {
    return new Date(o);
  }
  return null;
}

export function isBitOn(n, mask = 1) {
  return bit(n, mask) === 1;
}

export function isBitOff(n, mask = 1) {
  return bit(n, mask) === 0;
}

export function setBitOn(n, mask = 0) {
  return (isNumber(n)) ? (n | mask) : n;
}

export function setBitOff(n, mask = 0) {
  const bitPos = exp(2, mask);
  if (bitPos <= 0) return n;
  return (n & ~(1 << (bitPos - 1)));
}

export function toggleBit(n, mask = 0) {
  if (isNumber(n) && isNumber(mask)) {
    return (n ^ mask);
  }
  return n;
}
export function bit(n, p = 1) {
  if (isNumber(n) && isNumber(p)) {
    if (p === 0) return -1;
    return ((n >>> (p - 1)) & 1);
  }
}

export function exp(base, result) {
  let exp = 0;

  if (base === 1) return result;
  do {
    result /= base;
    ++exp;
  } while (result > 1);

  return exp;
}

export function isPowerOf2(n) {
  return (Math.ceil(Math.log2(n)) === Math.floor(Math.log2(n)));
}

export function toBinary(n) {
  return (n >>> 0).toString(2);
}

export function indexsOf(arr, value) {
  return reduce(arr, (acc, el, i) => (el === value ? [...acc, i] : acc), []);
}

export function parseObject(obj, path, delimeter = '.') {
  if (isDefined(obj)) {
    let item = Object.assign({}, obj);
    let protoItem = Object.create(obj, {});
    if (isStringWithLength(path)) {
      const props = path.split(delimeter);
      if (isArrayWithLength(props)) {
        for (let i = 0; i < props.length; i++) {
          if (hasOwnProperty(item, props[i]) || props[i] in item) {
            item = item[props[i]];
            if (isFunction(item)) {
              item = item();
            }
          } else if (props[i] in protoItem) {
            item = protoItem[props[i]];
            if (isFunction(item)) {
              item = item();
            }
          } else {
            return;
          }
        }

        return item;
      }
    }
  }

  return;
}

export function toConstant(enumeration, key) {
  if (this.isDefined(enumeration) && isStringWithLength(key)) {
    return enumeration[this.keys(enumeration).filter(function(k) {
      return key.toLowerCase() === k.toLowerCase();
    }).pop() || ''];
  }
}

export function replace(o, regexp, replace) {
  if (this.isStringWithLength(o)) {
    return o.replace(regexp, replace)
  }

  return o;
}

//
// SDL Need to look into this regarding the use og arguments.
//     Lodash replacement...
//
export function debounce(func, wait = 100) {
  const throttled = this.throttle(func, wait);

  const result = () => {
    throttled.cancel();
    throttled.apply(this, arguments);
  };

  result.cancel = () => {
    throttled.cancel();
  };

  return result;
}

export function throttle(func, wait = 100) {
  let timeout;
  let _arguments = arguments;

  const result = () => {
    const _this = this;
    //
    // SDL Need to look into this regarding the use og arguments.
    //     Lodash replacement...
    //
    _arguments = arguments;

    if (timeout) {
      return;
    }

    if (wait <= 0) {
      func.apply(_this, _arguments);
    } else {
      timeout = setTimeout(() => {
        timeout = undefined;
        func.apply(_this, _arguments);
      }, wait);
    }
  };

  result.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }
  };

  return result;
}

export default {
  bit,
  camelCase,
  contains,
  debounce,
  endsWith,
  exact,
  exactMatch,
  exp,
  findItem,
  hasOwnProperty,
  indexsOf,
  init,
  isArray,
  isArrayWithLength,
  isBitOff,
  isBitOn,
  isBoolean,
  isBrowser,
  isDate,
  isDateObject,
  isDecimal,
  isDefined,
  isEmpty,
  isEnum,
  isFalse,
  isFunction,
  isIOS,
  isLTR,
  isNull,
  isNullOrUndefined,
  isNumber,
  isObject,
  isPowerOf2,
  isString,
  isStringWithLength,
  isTrue,
  isUndefined,
  localeTime,
  parseDate,
  parseObject,
  replace,
  setBitOff,
  setBitOn,
  startsWith,
  throttle,
  toBinary,
  toConstant,
  toDate,
  toggleBit,
  wordCount,
};
