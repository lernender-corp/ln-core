import {Action} from './action';
import { Tooltip } from './tooltip';
/**
 * Class: Icon
 */
export declare class Icon extends Action {
  backgroundColor: any;
  color: any;
  exists: boolean;
  tooltip?: Tooltip;
  url: string;
  hasUrl(): boolean;
  hasColor(): boolean;
  hasBackgroundColor(): boolean;
  constructor();
  constructor(options: Object);
}
