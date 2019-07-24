import * as Library from "../library/index";
/**
 * Class: Interval
 */
export class Interval {
  /**
   * Constructor()
   * @param options
   */
  constructor (options) {
    this.hour = Library.init(options, 'hour', 12);
    this.minute = Library.init(options, 'minute', 0);
    this.second = Library.init(options, 'second', 0);
  }
}
