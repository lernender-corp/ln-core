import { Action } from './action';

/**
 * Class: Menu
 */
export declare class Menu extends Action {
  public hasRouterLink(): boolean;
  public routerLink: string;
  constructor();
  constructor(options: Object);
}
