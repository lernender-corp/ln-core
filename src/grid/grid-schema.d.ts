import { GridUser } from './grid-user';
import { GridColumn } from './grid-column';

export declare class GridSchema {
  columns: GridColumn[];
  editable: boolean;
  enableColResize: boolean;
  filterRowHeight: number;
  filtering: boolean;
  floatingFilter: boolean;
  headerHeight: number;
  noRecordsFound: string;
  quickFilter: object;
  rowCheckSelection: string;
  rowHeight: number;
  rowSelection: string;
  sorting: boolean;
  status: object;
  style: object;
  toolbarHeight: number;
  user: GridUser;

  hasRowCheckSelection(): boolean;
  hasRowSelection(): boolean;
  isMultiCheckBoxSelection(): boolean;
  isMultiSelection(): boolean;
  isSingleCheckBoxSelection(): boolean;
  isSingleSelection(): boolean;
  hasUser(): boolean;

  constructor();
  constructor(options: Object);
}
