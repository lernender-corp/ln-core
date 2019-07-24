import * as Constant from '../constant';

export class GridSort {
  public direction: Constant.Direction;
  public active: boolean;
  public disabled: boolean;

  public toggleDirection(): void;
  public isAscending(): boolean;
  public isDescending(): boolean;
	public pubisUnSorted(): boolean;

  constructor();
  constructor(options?: Object);
  constructor(options?: GridSort);
  constructor(options?: any);
}
