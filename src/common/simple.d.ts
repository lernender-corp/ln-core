/**
 * @class Simple
 * @description Simple class
 */
export declare class Simple {
  active: boolean;
  description: string;
  disabled: boolean;
  hidden: boolean;
  id: any;
  name: string;
  uid: string;
  hasId(): boolean;
  isActive(): boolean;
  isVisible(): boolean;
  hasName(): boolean;
  hasDescription(): boolean;
  constructor();
  constructor(options: Object);
}
