import * as Library from "../library/index";
import {Action} from "./action";
/**
 * Class: Url
 */
export class Url extends Action {
  /**
   * hasUrl()
   * @returns {*}
   */
  hasUrl() {
    return Library.isStringWithLength(this.url);
  }
  /**
   * Constructor()
   * @param options
   */
  constructor (options) {
    super(options);
    this.url = Library.init(options, 'url');
  }
}
