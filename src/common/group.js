import * as Library from "../library/index";
import { Action } from "./action";
/**
 * Class: Group
 */
export class Group extends Action {
  /**
   * hasChildren()
   * @returns {*}
   */
  hasChildren() {
    return Library.isArrayWithLength(this.children);
  }
  /**
   * Constructor()
   * @param options
   */
  constructor (options) {
    super(options);
    this.children = Library.init(options, "children", []);
  }
}

