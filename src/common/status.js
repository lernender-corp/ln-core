import * as Library from "../library/index";
import * as Constant from "../constant";
import {Base} from './base';
/**
 * Class: Status
 */
export class Status extends Base {
  /**
   * Constructor()
   * @param options
   */
  constructor (options) {
    super(options);
    this.type = Library.init(options, 'type', Constant.Status.Active);
  }
}
