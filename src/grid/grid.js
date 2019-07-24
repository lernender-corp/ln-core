import { Simple } from '../common/simple';
import { find, filter, each } from 'lodash-es';
import { GridColumn } from './grid-column';

/**
 * Class: Grid
 */
export class Grid extends Simple {
  
  getColumnByField(field) {
    return find(this.columns, c => {
      return c.field.name === field;
    });
  }

  getColumnByType(type) {
    if (Library.isDefined(type)) {
      return filter(this.columns, o => {
        return o.type === type;
      });
    }
    return [];
  }

  setActiveColumn(column) {
    if (Library.isObject(column)) {
      if (column instanceof GridColumn) {
        each(this.columns, col => {
          col.sort.active = column.uid === col.uid;
        });
      }
    }
  }

  /**
   * constructor()
   */
  constructor(options) {
    super(options);
    this.columns = [];
    this.title = Library.init(options, 'title', '');
  }
}
