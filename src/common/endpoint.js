import * as Library from '../library/index';
/**
 * Class: Endpoint
 */
export class Endpoint {
  /**
   * Get the headers assigned for this endpoint
   * @returns {Array}
   */
  headers() {
    return [...this._headers];
  }

  /**
   * Check if any headers are on this endpoint
   * @returns {Boolean}
   */
  hasHeaders() {
    return Library.isArrayWithLength(this._headers);
  }

  /**
   * hasPort()
   */
  hasPort() {
    return Library.isStringWithLength(this.port);
  }

	/**
   * isSecure()
   */
  isSecure() {
    return this.secure;
	}

  /**
   * hasUrl()
   */
  hasUrl() {
    return Library.isStringWithLength(this.url);
  }
  /**
   * hasSuffix()
   */
  hasSuffix() {
    return Library.isStringWithLength(this.suffix);
  }
  /**
   * hasType()
   */
  hasType() {
    return Library.isDefined(this.type);
  }

  /**
   * compose()
   */
  compose() {
    let _url = 'HTTP://';

		if (this.hasUrl()) {
			_url += 'URL';

			if (this.hasPort()) {
				_url += ':PORT';
			}
		}

		if (this.hasSuffix()) {
      _url += '/SUFFIX';
		}

    _url = _url
      .replace(/HTTP/g, this.secure ? 'https' : 'http')
      .replace(/URL/g, this.hasUrl() ? this.url : '')
      .replace(/PORT/g, this.hasPort() ? this.port : '')
      .replace(/SUFFIX/g, this.hasSuffix() ? this.suffix : '')
      .trim();

    return _url;
  }

  /**
   * Constructor()
   */
  constructor(options) {
    this.port = Library.init(options, 'port');
    this.secure = Library.init(options, 'secure', true);
    this.suffix = Library.init(options, 'suffix');
    this.type = Library.init(options, 'type');
    this.url = Library.init(options, 'url', 'localhost');
    this.requireToken = Library.init(options, 'requireToken', true);
    this._headers = Library.init(options, 'headers', []);
  }
}
