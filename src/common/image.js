import * as Library from '../library/index';
import { Base } from './base';
import { Guid } from './guid';

export class Image extends Base {
  /**
   * hasHRef()
   * @returns {*}
   */
	hasHRef() {
		return Library.isStringWithLength(this.href)
	}

  /**
   * hasUrl() 
   * @returns {*}
   */
  hasStyle() {
    return Library.isDefined(this.style);
	}

  constructor(options) {
		super(options);
		this.uid = Guid.CHAR();
		this.href = Library.init(options, 'href','');
		this.style =Library.init(options, 'style', {});
	}
}
