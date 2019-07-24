import * as Library from "../library/index";
import * as Constant from "../constant";
import {Base} from "./base";
/**
 * Class: Phone
 */
export class Phone extends Base {
  /**
   * Constructor()
   * @param options
   */
  constructor (options) {
    super(options);
    this.type = Library.init(options, 'type', Constant.Phone.Cell);
    this.number = Library.init(options, 'number');
  }
}
