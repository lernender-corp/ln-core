import * as Library from "../library/index";
import * as Constant from "../constant";

export class Sort {
  /**
   * toggle()
   */
  toggle() {
    this.direction = (this.direction === Constant.Direction.Ascending) ?
      Constant.Direction.Descending : Constant.Direction.Ascending;
  }

  /**
   * isAscending
   * @returns {boolean}
   */
  isAscending() {
    return this.direction === Constant.Direction.Ascending;
  }

  /**
   * isDescending()
   * @returns {boolean}
   */
  isDescending() {
    return this.direction === Constant.Direction.Descending;
  }
  /**
   * Constructor()
   * @param options
   */
  constructor (options) {
    this.direction = Library.init(options, 'direction', Constant.Direction.Ascending);
  }
}
