import * as Library from '../library/index';
import { Simple } from '../common/simple';

export class GridHeader extends Simple {
  constructor(options) {
    super(options);
		this.style = Library.init(options, 'style', {});
  }
}
