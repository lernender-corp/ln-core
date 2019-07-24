import * as Library from "../library/index";
import {Base} from "./base";
/**
 * Class: Action
 */
export class Action extends Base {
  /**
   * hasOnClick()
   * @returns {*}
   */
  hasOnClick() {
    return Library.isFunction(this.onClick);
  }
  /**
   * hasUrl()
   * @returns {*}
   */
  hasStyle() {
    return Library.isDefined(this.style);
  }
  /**
   * Constructor()
   * @param options
   */
  constructor (options) {
    super(options);
    this.onClick = Library.init(options, 'onClick', () => {});
    this.checked = Library.init(options, 'checked', false);
    this.style = Library.init(options, 'style', {});
  }
}
