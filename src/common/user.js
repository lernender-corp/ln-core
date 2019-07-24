import * as Library from "../library/index";
import {Name} from "./name";
/**
 * Class: Version
 */
export class User extends Name {
  /**
   * Constructor()
   * @param options
   */
  constructor (options) {
    super(options);
    this.email = Library.init(options, 'email');
    this.roles = Library.init(options, 'roles', []);
  }
}
