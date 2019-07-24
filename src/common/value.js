import * as Library from "../library/index";
import {Action} from "./action";
/**
 * Class: Item
 */
export class Value extends Action {
  /**
   * hasValue()
   * @returns {*}
   */
  hasValue() {
    return Library.isDefined(this.value);
  }
  /**
   * Constructor()
   * @param options
   */
  constructor (options) {
    super(options);
    this.value = Library.init(options, 'value');
  }
}
