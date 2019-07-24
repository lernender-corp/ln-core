import { Simple } from '../common/simple';
import * as Constant from '../constant';
/**
 * Class: GridOption
 */
export declare class GridOption extends Simple {
  public view: Constant.GridView;
  public noDataAvailable: string;
  public selection: string;
  public width: string;
  public height: string;
  public body: any;

  constructor();
  constructor(options: Object);
}
