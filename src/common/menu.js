import * as Library from '../library/index';
import {Action} from './action';

export class Menu extends Action {

	hasRouterLink() {

		if (Library.isDefined(this.routerLink)) {
			if (Library.isArray(this.routerLink)) {
				return Library.isArrayWithLength(this.routerLink);
			} else {
				return Library.isStringWithLength(this.routerLink);
			}
		}

		return false;
	}

	/*
	* Constructor()
	*/
  constructor(options) {
		super(options);
		this.routerLink = Library.init(options, 'routerLink');
  }
}
