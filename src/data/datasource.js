import * as Library from "../library/index";
import {PageSet} from "./pageset";
import {cloneDeep} from 'lodash-es';
/**
 * Class: DataSource
 */
export class DataSource {
  /**
   * length()
   * @returns {*}
   */
  length() {
    if (Library.isArray(this._data)) {
      return this._data.length;
    }
    return 0;
  }
  /**
   * data
   * @returns {*}
   */
  get data() {
    return this._data;
  }
  /**
   * data
   * @param items
   */
  set data(items) {
    if (Library.isArray(items)) {
      this.flush();
      this._data = items;
    }
  }
  /**
   * flush()
   */
  flush() {
    if (Library.isArray(this._data)) {
      this._data.splice(0, this._data.length);
    }
  }
  /**
   * firstOrDefault()
   * @returns {*}
   */
  firstOrDefault() {
    if (Library.isArrayWithLength(this._data)) {
      return this._data[0];
    }
    return new Object();
  }
  /**
   * exists()
   * @returns {*|boolean}
   */
  exists() {
    return (this.length > 0);
  }
  /**
   * constructor()
   * @param options
   */
  constructor(options) {
    this._data = cloneDeep(Library.init(options, 'items', []));
  }
}
