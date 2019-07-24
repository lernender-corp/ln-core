import * as Library from '../library/index';
import { Base } from './base';
import { Guid } from './guid';

export declare class Image extends Base {
	public href: string;
	public style: object;
	public hasHRef();
	public hasStyle();

  constructor();
  constructor(options: Object);
}
