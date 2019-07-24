import * as Library from '../library/index';
import { Element } from '../common/element';

/**
 * @name GridCell
 */
export class GridCell extends Element {
  constructor(options) {
    super(options);
    this.align = Library.init(options, 'align', 'left');
    this.pattern = Library.init(options, 'pattern');
    this.value = Library.init(options, 'value');
  }
}
