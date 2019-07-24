import * as Library from '../../library/index';
/**
 * @name Schema
 * @description Acbtract Generic Schema Definition
 */
export class Schema {
  constructor(options) {
    this.items = Library.init(options, 'items', []);
    this.onActivated = Library.init(options, 'onActivated');
    this.onActive = Library.init(options, 'onActive');
    this.onAdd = Library.init(options, 'onAdd');
    this.onAll = Library.init(options, 'onAll');
    this.onCheck = Library.init(options, 'onCheck');
    this.onDblClick = Library.init(options, 'onDblClick');
    this.onDeactivated = Library.init(options, 'onDeactivated');
    this.onDelete = Library.init(options, 'onDelete');
    this.onDownload = Library.init(options, 'onDownload');
    this.onEdit = Library.init(options, 'onEdit');
    this.onHeader = Library.init(options, 'onHeader');
    this.onIcon = Library.init(options, 'onIcon');
    this.onLink = Library.init(options, 'onLink');
    this.onPageChange = Library.init(options, 'onPageChange');
    this.onView = Library.init(options, 'onView');
    this.options = Library.init(options, 'options', {});
    this.totalRecords = Library.init(options, 'totalRecords', 0);
  }
}
