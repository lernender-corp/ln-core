import * as Library from '../library/index';
import {GridColumn} from './grid-column';

/**
 * @name GridUser
 * @description Contains a collection of user settings for the grid
 */
export class GridUser {

  hasColumns() {
    return Library.isArrayWithLength(this._columns);
  }

  get columns() {
    return this._columns;
  }

  set columns(cols) {
    this._columns = cols;
  }

  constructor(options) {
    //
    // Initialize columns
    //
    this._columns = Library.init(options, 'columns', []);
    if (this._columns.length > 0) {
      this._columns = this._columns.map(c => new GridColumn(c));
    }
  }
}
