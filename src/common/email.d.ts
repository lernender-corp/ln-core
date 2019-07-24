import {Base} from './base';
/**
 * Class: Email
 */
export declare class Email extends Base {
  address: string;
  isValid(): boolean;
  hasAddress(): boolean;
  constructor();
  constructor(options: Object);
}
