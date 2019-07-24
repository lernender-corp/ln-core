import * as Library from '../library/index';
import { Simple } from '../common/simple';

export class GridField extends Simple {
  constructor(options) {
    super(options);
    if (Library.isStringWithLength(options)) {
      this.name = options;
      this.server = options;
    } else if (Library.isObject(options)) {
      this.name = Library.init(options, 'name');
      this.server = Library.init(options, 'server');
    }
  }
}
