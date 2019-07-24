import { Simple } from '../common/simple';
import { GridColumn } from './grid-column';

/**
 * Class: Grid
 */
export declare class Grid extends Simple {
  public title: string;

  public getColumnByField(field: string): GridColumn;
  public getColumnByType(type: any): GridColumn;
  public setActiveColumn(column: any): void;

  constructor();
  constructor(options: Object);
}
