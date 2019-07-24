import * as Library from "../library";
import {Action} from "./action";
import {Icon} from './icon';
import {Tooltip} from './tooltip';
/**
 * Class: Element
 */
export class Element extends Action {
  /**
   * hasTooltip()
   * @returns {*}
   */
  hasTooltip() {
    return Library.isStringWithLength(this.tooltip);
  }
  /**
   * hasIcon()
   * @returns {*}
   */
  hasIcon() {
    return (Library.isObject(this.icon) && Library.isStringWithLength(this.icon.name));
  }
  /**
   * hasRef()
   * @returns {*}
   */
  hasRef() {
    return Library.isDefined(this.ref);
  }

  /**
   * Constructor()
   * @param options
   */
  constructor(options) {
    super(options);
    this.tooltip = new Tooltip(Library.init(options, 'tooltip', {}));
    this.icon = new Icon(Library.init(options, 'icon', {}));
    this.ref = Library.init(options, 'ref');
    this.html = Library.init(options, 'html', '');
    this.labelClassList = Library.init(options, 'labelClassList', []);
    this.placeholder = Library.init(options, 'placeholder','');
  }
}
