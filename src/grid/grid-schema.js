import * as Library from '../library/index';
import * as Constant from '../constant';
import {GridUser} from './grid-user';
import { GridColumn } from './grid-column';

/**
 * @name GridSchema
 * @description Contains a generic schema for a generic container component
 */
export class GridSchema {

  isSingleSelection() {
    return this.rowSelection === Constant.GridSchemaSelection.Single;
  }

  isMultiSelection() {
    return this.rowSelection === Constant.GridSchemaSelection.Multi;
  }

  isSingleCheckBoxSelection() {
    return this.rowCheckSelection === Constant.GridSchemaSelection.Single;
  }

  isMultiCheckBoxSelection() {
    return this.rowCheckSelection === Constant.GridSchemaSelection.Multi;
  }

  hasRowSelection() {
    return this.isMultiSelection() || this.isSingleSelection();
  }

  hasRowCheckSelection() {
    return this.isMultiCheckBoxSelection() || this.isSingleCheckBoxSelection();
  }

  hasUser() {
    return Library.isDefined(this.user);
  }

  constructor(options) {
    //
    // Initialize columns
    //
    this.columns = [];
    //
    // Convert columns to GridColumn(s)
    //
    if (Library.isArrayWithLength(Library.init(options, 'columns'))) {
      this.columns = Library.init(options, 'columns').map(c => new GridColumn(c));
    }
    this.user = new GridUser(Library.init(options, 'user', {}));
    this.editable = Library.init(options, 'editable', false);
    this.enableColResize = Library.init(options, 'enableColResize', false);
    this.filtering = Library.init(options, 'filtering', true);
    this.filterRowHeight = Library.init(options, 'filterRowHeight', 0);
    this.floatingFilter = Library.init(options, 'floatingFilter', false);
    this.headerHeight = Library.init(options, 'headerHeight', 0);
    this.noRecordsFound = Library.init(options, 'noRecordsFound', '');
    this.rowHeight = Library.init(options, 'rowHeight', 0);
    this.rowSelection = Library.init(options, 'rowSelection', Constant.GridSchemaSelection.Single);
    this.rowCheckSelection = Library.init(
      options,
      'rowCheckSelection',
      Constant.GridSchemaSelection.Multi
    );
    this.sorting = Library.init(options, 'sorting', true);
    this.status = Library.init(options, 'status', {
      hidden: false,
      label: 'SELECTED of TOTAL selected'
    });
    this.toolbarHeight = Library.init(options, 'toolbarHeight', 0);
    this.quickFilter = Library.init(options, 'quickFilter', {
      hidden: false
    });
    this.style = Library.init(options, 'style', {});
  }
}
