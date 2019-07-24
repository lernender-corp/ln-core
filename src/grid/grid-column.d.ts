import * as Constant from '../constant';
import { Action } from '../common/action';
import { GridField } from './grid-field';
import { GridSort } from './grid-sort';
import { GridFilter } from './grid-filter';
import { Icon } from '../common/icon';
import { FilterComponent } from './filter-component';
import { TooltipComponent } from './tooltip-component';
import { CellComponent } from './cell-component';
import { GridHeader } from './grid-header';

/**
 * Class: GridColumn
 */
export declare class GridColumn extends Action {
  align: string;
  cellComponent: CellComponent;
  defaultDisplay: string;
  field: GridField;
  filter: GridFilter;
  filterComponent: FilterComponent;
  filterCriteria: string;
  filterDelimeter: string;
  filterOperator: string;
  flex?: string;
  flexBasis?: string;
  header: GridHeader;
  maxWidth?: number;
  minWidth?: number;
  order: number;
  pattern: string;
  pinned?: boolean | string | 'left' | 'right';
  placeholder?: string;
  resizeable: boolean;
  showOnlyOnHover: boolean;
  sort: GridSort;
  tooltipComponent: TooltipComponent;
  width?: number;

  canFilter(): boolean;
  canResize(): boolean;
  fieldName(): string;
  hasCellComponent() : boolean;
  hasCellRender(): boolean;
  hasCustomFilter(): boolean;
  hasDefaultDisplay() : boolean;
  hasDelimeter(): boolean;
  hasField(): boolean;
  hasFieldObjectReference(): boolean;
  hasFilter(): boolean;
  hasFilterCriteria(): boolean;
  hasFilterOperator(): boolean;
  hasPattern(): boolean;
  hasQuickFilter(): boolean;
  hasStartsWithFilterCriteria(): boolean;
  onCellRender(data: any): any;
  onComposite(data: any): any;
  onCustomFilter(row: any, column: GridColumn): boolean;
  onFilter(data: any, column: any): any;
  onQuickFilter(row: any, column: GridColumn): boolean;
  onRule(data: any): any;
  setQuickFilter(type: number, data: any): boolean;

  constructor();
  constructor(options: Object);
}
