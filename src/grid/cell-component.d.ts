import {Simple} from '..';

/**
 * Class:cellComponent
 */
export declare class CellComponent extends Simple {
  align: string;
  checkAllFieldValue: string;
  cols: number;
  dataTextField: string;
  dataValueField: string;
  default: string;
  hover: boolean;
  indeterminate: boolean;
  indicatorIcon: string;
  items: Array<any>;
  label: string;
  maxlength: number;
  minlength: number;
  multiple: boolean;
  pattern: string;
  placeholder: string;
  rows: number;
  style: object;
  tooltip: boolean;
  type: string;
  value: string;
  visibility: boolean;
  hasItems(): boolean;
  constructor();
  constructor(options: Object);
}
