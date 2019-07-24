import { Simple } from './simple';
import  { Action } from './action';
/**
 * Class: Group
 */
export declare class Group extends Action {
  children: Action[];
  hasChildren(): boolean;
  constructor();
  constructor(options: Object);
}
