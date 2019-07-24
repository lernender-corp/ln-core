import * as Library from '../library/index';
import {Simple} from '../common/simple';

/**
 * @name ContextMenu
 */
export class ContextMenu extends Simple {
  constructor(options) {
    super(options);
    this.shortcut = Library.init(options, 'shortcut');
    this.action = Library.init(options, 'action');
    this.checked = Library.init(options, 'checked');
    this.icon = Library.init(options, 'icon');
    this.subMenu = Library.init(options, 'subMenu');
    this.cssClasses = Library.init(options, 'cssClasses');
    this.tooltip = Library.init(options, 'tooltip');
    this.context = Library.init(options, 'context');
  }
} 
