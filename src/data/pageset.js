import * as Library from "../library/index";
import {Page} from "./page";
import {Range} from "../common/range";
/**
 * Class: PageSet
 */
export class PageSet {

  /**
   * pageSize
   * @returns {*}
   */
  get pageSize() {
    return this._pageSize;
  }
  /**
   * length
   * @returns {*}
   */
  get length() {
    return this._length;
  }
  /**
   * indexId
   * @returns {number}
   */
  get indexId() {
    return this._indexId;
  }

  /**
   * indexId
   * @param index
   */
  set indexId(index) {
    if (Library.isNumber(index)) {
      if (index >= 1 && index <= this._pages.length) {
        this._indexId = index;
        this._pages.forEach(p => p.active = p.id === this._indexId);
      }
    }
  }

  /**
   * clear()
   */
  clear() {
    //
    // Clear pages
    //
    if (Library.isArray(this._pages)) {
      this._pages.splice(0, this._pages.length);
    }
  }
  /**
   * hasPages()
   * @returns {boolean}
   */
  hasPages() {
    if (Library.isArray(this._pages))
      return (this._pages.length > 0);

    return false;
  }
  /**
   * pages()
   * @returns {boolean}
   */
  pages() {
    return this._pages;
  }
  /**
   * start
   * @returns {number}
   */
  start() {
    return (this._indexId = 1);
  }
  /**
   * end
   * @returns {number}
   */
  end() {
    this._indexId = (this._pages.length > 0) ? this._pages.length: 1;
    return this._indexId;
  }
  /**
   * next()
   * @returns {number|*}
   */
  next() {
    this._indexId += 1;
    if (this._indexId > this._pages.length) {
      this._indexId = 1;
    }
    return this._indexId;
  }
  /**
   * previous()
   * @returns {number|*}
   */
  previous() {
    this._indexId -= 1;
    if (this._indexId <= 0) {
      this._indexId = this._pages.length;
    }
    return this._indexId;
  }
  /**
   * ActivePage()
   * @returns {*}
   */
  ActivePage() {
    if (this.hasPages()) {
      return (this._pages[this._indexId - 1]);
    }
  }
  /**
   * toArray()
   * @returns {Array}
   */
  toArray() {
    if (this.hasPages()) {
      return (Array.from(new Array(this.sets()), (x, i) => i + 1));
    }
    return [];
  }

  /**
   * sets()
   * @returns {number}
   */
  sets() {
    return Math.ceil(this._length / this._pageSize);
  }
  /**
   * _createSets()
   * @returns {*}
   */
  _createSets() {
    //
    // Clear pages
    //
    this.clear();
    //
    // Loop through the page sets
    //
    for (let i = 1; i < this.sets() + 1; i++) {
      this._pages.push(
        new Page({
          id: i,
          name: i.toString(),
          range: new Range({
            start: (this._pageSize * i) - this._pageSize,
            end: i < this.sets() ? ((this._pageSize * i) - 1) : this.length - 1
          })
        }));
    }
    //
    // Has Pages
    //
    return this.hasPages();
  }
  /**
   * Constructor()
   * @param options
   */
  constructor(options) {
    this._pages = [];
    this._pageSize = Library.init(options, 'pageSize', 10);
    this._length = Library.init(options, 'length', 0);
    this._indexId = Library.init(options, 'indexId', 1);
    //
    // Create Pages
    //
    this._createSets();
  }
}
