import * as Library from '../library/index';
import { Simple } from './simple';
/**
 * Class: Base
 */
export class Base extends Simple {
  /**
   * hasLabel()
   * @returns {*}
   */
  hasLabel() {
    return Library.isStringWithLength(this.label);
  }
  /**
   * hasType()
   * @returns {*}
   */
  hasType() {
    return Library.isDefined(this.type);
  }
  /**
   * Constructor()
   */
  constructor(options) {
    super(options)
    this.label = Library.init(options, 'label');
    this.type = Library.init(options, 'type');
  }
}
