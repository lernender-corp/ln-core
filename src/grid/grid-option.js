import * as Library from '../library/index';
import * as Constant from '../constant';
import { Simple } from '../common/simple';
/**
 * Class: GridOption
 */
export class GridOption extends Simple {
  /**
   * Constructor()
   */
  constructor(options) {
    super(options);
    this.view = Library.init(options, 'view', Constant.GridView.Grid);
    this.noDataAvailable = Library.init(
      options,
      'noDataAvailable',
      'No records found.'
    );
    this.selection = Library.init(options, 'selection', 'single');
    this.width = Library.init(options, 'width', 'auto');
    this.height = Library.init(options, 'height', 'auto');
    this.body = Library.init(options, 'body', {});
  }
}
