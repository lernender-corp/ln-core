import * as Library from "../library/index";
import {Simple} from '../common/simple';
/**
 * Class: AuthConfig
 */
export class AuthConfig extends Simple {
  /**
   * Constructor()
   * @param options
   */
  constructor(options) {
    super(options);
    this.clientId = Library.init(options, 'clientId');
    this.domain = Library.init(options, 'domain');
    this.callbackURL = Library.init(options, 'callbackURL');
  }
}
