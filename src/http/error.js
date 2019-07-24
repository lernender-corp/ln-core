import * as Library from "../library/index";
import {Guid} from "../common/guid";

export class Error {
  /**
   * hasError()
   */
  hasError() {
    return (Library.isStringWithLength(this.message) && (this.code > 0));
  }

  /**
   * Constructor()
   */
  constructor(options) {
    this.code = Library.init(options, 'code', 0);
    this.id = Library.init(options, 'id', Guid.NEW());
    this.message = Library.init(options, 'message', '');
  }
}
