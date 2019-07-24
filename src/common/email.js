import * as Library from "../library/index";
import * as Validator from "../library/validate";
import * as Constant from "../constant";
import {Base} from "./base";
/**
 * Class: Email
 */
export class Email extends Base {
  /**
   * isValid()
   * @returns {*}
   */
  isValid() {
    return (this.hasAddress() && Validator.isEmail(this.address));
  }
  /**
   * hasAddress()
   * @returns {*}
   */
  hasAddress() {
    return (Library.isStringWithLength(this.address));
  }
  /**
   * Constructor()
   * @param options
   */
  constructor (options) {
    super(options);
    this.type = Library.init(options, 'type', Constant.Email.Work);
    this.address = Library.init(options, 'address');
  }
}

