import {Simple} from '../common/simple';

export declare class ContextMenu extends Simple {
  shortcut?: string;
  action?: () => void;
  checked?: boolean;
  icon?: HTMLElement | string;
  subMenu?: ContextMenu[];
  cssClasses?: string[];
  tooltip?: string;
  context?: any;
  constructor();
  constructor(options: Object);
}
