import { Base } from "./base";
import { Checkbox } from "../constant";
/**
 * Class: Item
 */
export declare class Action extends Base {
  hasOnClick(): boolean;
  hasStyle(): boolean;
  onClick: any;
  checked: boolean | Checkbox;
  style: Object;
  constructor();
  constructor(options: Object);
}
