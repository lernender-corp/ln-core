import * as Library from "../library/index";
import {Guid} from "./guid";

/**
 * Class: Audit
 */
export class Audit {
  /**
   * Constructor()
   */
  constructor(options) {
    this.createdAt = Library.init(options, 'createdAt');
    this.createdBy = Library.init(options, 'createdBy');
    this.createUpdateTraceId = Library.init(options, 'createUpdateTraceId');
    this.expiresAt = Library.init(options, 'expiresAt');
    this.uid = Guid.NEW();
  }
}
