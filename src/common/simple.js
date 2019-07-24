import * as Library from "../library/index";
import {Guid} from "./guid";

/**
 * Class: Simple
 */
export class Simple {
  /**
   * hasId()
   * @returns {*}
   */
  hasId() {
    return Library.isDefined(this.id);
  }

  /**
   * isActive()
   * @returns {*}
   */
  isActive() {
    return Library.isTrue(this.active);
  }

  /**
   * isVisible()
   * @returns {*|boolean}
   */
  isVisible() {
    return !this.hidden;
  }

  /**
   * hasDescription()
   * @returns {boolean}
   */
  hasDescription() {
    return Library.isStringWithLength(this.description);
  }

  /**
   * hasName()
   * @returns {boolean}
   */
  hasName() {
    return Library.isStringWithLength(this.name);
  }

  /**
   * Constructor()
   */
  constructor(options) {
    this.active = Library.init(options, 'active', false);
    this.description = Library.init(options, 'description');
    this.disabled = Library.init(options, 'disabled', false);
    this.hidden = Library.init(options, 'hidden', false);
    this.id = Library.init(options, 'id');
    this.name = Library.init(options, 'name');
    this.uid = Guid.NEW();
  }
}
