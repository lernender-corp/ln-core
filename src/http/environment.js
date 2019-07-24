import * as Library from "../library/index";
import {Guid} from "../common/guid";

export class Environment {
  /**
   * Constructor()
   */
  constructor(options) {
    this.uid = Guid.NEW();
    this.apiUrl = Library.init(options, 'apiUrl');
    this.authUrl = Library.init(options, 'authUrl');
    this.version = Library.init(options, 'version');
    this.security = Library.init(options, 'security', false);
    this.production = Library.init(options, 'production', false);
    this.hmr = Library.init(options, 'hmr', false);
    this.pkg = Library.init(options, 'pkg', {});
    this.buildDate = Library.init(options, 'buildDate', new Date());
  }
}
