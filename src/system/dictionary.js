import * as Library from "../library/index";
import {Guid} from '../common/guid';

/**
 * Class: Dictionary
 */
export class Dictionary {
  /**
   * keys
   * @returns {Array}
   */
  keys() {
    return this._keys;
  }
  /**
   * values
   * @returns {Array}
   */
  values() {
    return this._values;
  }

  /**
   * add()
   * @param key
   * @param value
   */
  add(key, value) {
    if (Library.isStringWithLength(key) && Library.isStringWithLength(value)) {
      this[key] = value;
      this._keys.push(key);
      this._values.push(value);
      return this[key];
    }
  }

  /**
   * remove()
   * @param key
   */
  remove(key) {
    if (Library.isStringWithLength(key)) {
      var index = this._keys.indexOf(key, 0);
      this._keys.splice(index, 1);
      this._values.splice(index, 1);

      delete this[key];
      return false;
    }

    return true;
  }

  /**
   * containsKey
   * @param key
   * @returns {boolean}
   */
  containsKey(key) {
    return typeof this[key] !== "undefined";
  }

  /**
   * Constructor()
   * @param options
   */
  constructor(items = []) {
    this.uid = Guid.NEW();
    this._keys = [];
    this._values = [];

    if (Library.isArrayWithLength(items)) {
      for (let x = 0; x < items.length; x++) {
        this[items[x].key] = items[x].value;
        this._keys.push(items[x].key);
        this._values.push(items[x].value);
      }
    }
  }
}
