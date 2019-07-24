import {Simple} from '../common/simple';

export interface ICheckBox {
  checked: boolean;
  hidden: boolean;
}

/**
 * @class GridGeneric
 * @description Defines a generic html object for a container.
 */
export class GridGeneric extends Simple {
  public active: boolean;
  public canActivate: boolean;
  public canCheck: boolean;
  public canDelete: boolean;
  public checked: boolean;
  public contentField: string;
  public data: any;
  public deleted: boolean;
  public element: any;
  public format: string;
  public label: string;
  public options: any;
  public pattern: string;
  public placeholder: string;
  public required: boolean;
  public selected: boolean;
  public style: Object;
  public template: string;
  public type: any;
  public checkbox: ICheckBox

  public hasContent(): boolean;
  public hasFormat(): boolean;
  public hasTemplate(): boolean;
  public isActivate(): boolean;
  public isChecked(): boolean;
  public isCheckboxHidden(): boolean;
  public isDeleted(): boolean;
  public isExpanded(): boolean;

  constructor();
  constructor(options: Object);
  constructor(options?: any);
}
