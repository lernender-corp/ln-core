import * as Constant from '../constant';

export class GridSummary {
  total: number;
  selected: number;
  visible: number;
  hidden: number;
  label: string;

	hasVisibleRows(): boolean;
	hasHiddenRows(): boolean;
  hasFilteredRows(): boolean;
  hasSelected(): boolean;
  hasChecked(): boolean;

	allHiddenRows(): boolean;
	allVisibleRows(): boolean;
  run<T>(data: T[], prop?: string): GridSummary;

  constructor();
  constructor(options?: Object);
  constructor(options?: any);
}
