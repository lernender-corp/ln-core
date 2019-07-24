import {Simple} from './simple';
/**
 * Class: Range
 */
export declare class Range extends Simple {
  start: number;
  end: number;
  increment: number;
  toArray(): number[];
  isBetween(value: number): boolean;
  constructor();
  constructor(options: Object);
}
