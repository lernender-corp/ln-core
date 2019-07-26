import { Simple } from '../common/simple';
import { GridColumn } from './grid-column';

/**
 * Class: Preference
 */
export declare class Preference extends Simple {
  default: boolean;
  fieldName: string;
  fieldLabel: string;
  displayedFieldName: string;
  autoResizeCols: boolean;
  fontSize: number;
  root: boolean;
  columnStates: GridColumn[];
  sorLnodel: any[];
  disabled: boolean;
  rename(name:  string): Preference;
  constructor();
  constructor(options: Object);
}
