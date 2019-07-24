/**
 * Callback Reference
 */
export declare type CallbackReference = ($event: MouseEvent, o: Object) => void;
/**
 * @name Schema
 * @description Acbtract Generic Schema Definition
 */
export declare class Schema {
  items: any;
  onActivated: CallbackReference;
  onActive: CallbackReference;
  onAdd: CallbackReference;
  onAll: CallbackReference;
  onCheck: CallbackReference;
  onDblClick: CallbackReference;
  onDeactivated: CallbackReference;
  onDelete: CallbackReference;
  onDownload: CallbackReference;
  onEdit: CallbackReference;
  onHeader: CallbackReference;
  onIcon: CallbackReference;
  onLink: CallbackReference;
  onPageChange: CallbackReference;
  onView: CallbackReference;
  options: any;
  totalRecords: number;
  constructor();
  constructor(options: Object);
}
