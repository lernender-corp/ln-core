import {Simple} from './simple';

/**
 * @class Base
 * @description Base level class
 */
export declare class Base extends Simple {
  label: string;
  type: any;
  hasLabel(): boolean;
  hasType(): boolean;
  constructor();
  constructor(options: Object);
}
