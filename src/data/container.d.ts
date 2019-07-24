import * as Constant from '../constant';
import {Base} from "../common/base";
import {DataSource} from './datasource';

export declare class Container extends Simple {
  dataSource: DataSource;
  selectionType: Constant.SelectionType;
  find(uid: string): any;
  getActive(): any[];
  getChecked(): any[];
  isChecked(obj: any): boolean;
  setActive(obj: any, active?: any): void;
  setChecked(obj: any, override?: boolean): any;
  constructor();
  constructor(options: Object);
}
