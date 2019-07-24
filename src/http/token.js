import * as Library from "../library/index";
import {Guid} from "../common/guid";
import {Simple} from "../common/simple";

export class Token extends Simple {

	//
	// set token
	//
	set token(token) {
		this._token = token;
	}
	//
	// get token
	//
	get token() {
		return this._token;
	}
  /**
   * hasToken()
   */
  hasToken() {
    return (Library.isStringWithLength(this.token));
	}
  /**
   * hasTokenExpired()
   */
	hasTokenExpired() {
		// return new Date().getTime() < this._expiresAt;
		return false;
	}
  /**
   * Constructor()
   */
  constructor(options) {
		super(options);
    this._token = Library.init(options, 'token');
    this._expiresAt = Library.init(options, 'expiresAt', false);
  }
}
