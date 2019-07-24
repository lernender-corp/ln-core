import * as Library from '../library/index';
import {Simple} from '../common/simple';
import {GridColumn} from './grid-column';
import {cloneDeep} from 'lodash-es';


/**
 * Class: Preference
 */
export class Preference extends Simple {

  rename(name = '') {
    if (Library.isStringWithLength(name)) {
      this.id = null;
      this.fieldName = null;
      this.fieldLabel = name;
      this.description = name;
      this.displayedFieldName = name;
      return this;
    }
  }

  /**
   * Constructor()
   */
  constructor(options) {
    super(options);
    this.name = Library.init(options, 'name', 'default');
    this.default = Library.init(options, 'default', this.name === 'default');
    this.fieldName = Library.init(options, 'fieldName', null);
    this.fieldLabel = Library.init(options, 'fieldLabel', Library.isStringWithLength(this.fieldName) ? this.fieldName : '');
    this.displayedFieldName = Library.init(options, 'displayedFieldName', Library.isStringWithLength(this.fieldName) ? this.fieldName : '');
    this.autoResizeCols = Library.init(options, 'autoResizeCols', true);
    this.fontSize = Library.init(options, 'fontSize', 13);
    this.columnStates = [];
    this.sortModel = [];
    this.root = Library.init(options, 'root', false);
    //
    // Convert enabled to disabled property here...
    //
    this.disabled = !Library.init(options, 'enabled', true);
    //
    // Column Definitions
    //
    if (Library.hasOwnProperty(options, 'columnStates')) {
      if (Library.isArrayWithLength(options['columnStates'])) {
        this.columnStates = options['columnStates'].map(col => new GridColumn(col))
      }
    }
    //
    // sortModel Definitions
    //
    if (Library.hasOwnProperty(options, 'sortModel')) {
      if (Library.isArrayWithLength(options['sortModel'])) {
        this.sortModel = options['sortModel']
      }
    }
  }
}
