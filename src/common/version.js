import * as Library from "../library/index";
import {Simple} from "./simple";
/**
 * Class: Version
 */
export class Version extends Simple {
  /**
   * Constructor()
   * @param options
   */
  constructor (options) {
    super(options);
    this.expires = Library.init(options, 'expires', new Date());
    this.major = Library.init(options, 'major', 1);
    this.minor = Library.init(options, 'minor', 0);
    this.patch = Library.init(options, 'patch', 0);
  }
}
