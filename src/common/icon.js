import * as Library from "../library/index";
import {Action} from './action';
import { Tooltip } from './tooltip';
/**
 * Class: Icon
 */
export class Icon extends Action {
  /**
   * hasUrl()
   * @returns {*}
   */
  hasUrl() {
    return Library.isStringWithLength(this.url);
  }
  /**
   * hasColor()
   * @returns {*}
   */
  hasColor() {
    return Library.isStringWithLength(this.color);
  }
  /**
   * hasBackgroundColor()
   * @returns {*}
   */
  hasBackgroundColor() {
    return Library.isStringWithLength(this.backgroundColor);
  }

  /**
   * Constructor()
   * @param options
   */
  constructor (options) {
    super(options);
    this.backgroundColor = Library.init(options, 'backgroundColor');
    this.color = Library.init(options, 'color');
    this.exists = Library.init(options, 'exists',  true);
    this.style = Library.init(options, 'style', {
      height: 'inherit',
      width: 'inherit'
    });
    this.tooltip = new Tooltip(Library.init(options, 'tooltip', {}));
    this.url = Library.init(options, 'url');
  }
}
