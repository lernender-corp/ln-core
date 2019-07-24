import * as Library from "../library/index";
import {Simple} from '../common/simple';
import {Range} from "../common/range";

/**
 * Page
 */
export class Page extends Simple {
  /**
   * Constructor()
   * @param options
   */
  constructor(options) {
    super(options);
    this.range = new Range(Library.init(options, 'range'));
  }
}
