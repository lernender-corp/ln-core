import { Action } from "./action";
import { Icon } from './icon';
import { Tooltip } from './tooltip';
/**
 * Class: Element
 */
export declare class Element extends Action {
  placeholder: string;
  tooltip: Tooltip;
  icon: Icon;
  ref: any;
  hLnl: string;
  labelClassList: string[];
  hasIcon(): boolean;
  hasTooltip(): boolean;
  hasRef(): boolean;
  constructor();
  constructor(options: Object);
}
