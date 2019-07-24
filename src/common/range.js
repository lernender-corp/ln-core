import * as Library from "../library/index";
import {Simple} from "./simple";
/**
 * Class: Range
 */
export class Range extends Simple {
  /**
   * toArray()
   * @returns {Array}
   */
  toArray() {
    let list = [];
    for (let i= this.start; i < this.end; i += this.increment) {
      list.push(i);
    }
    return (list);
  }

  /**
   * isBetween()
   * @param {*} value
   */
  isBetween(value) {
    if (Library.isNumber(value)) {
      return (this.start <= value && value <= this.end);
    }
    return false;
  }

  /**
   * Constructor()
   * @param options
   */
  constructor(options) {
    super(options);
    this.start = Library.init(options, 'start', 0);
    this.end = Library.init(options, 'end', 4);
    this.increment = Library.init(options, 'increment', 1);
  }
}
