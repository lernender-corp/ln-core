import {Simple} from "./simple";
import {Interval} from "./interval";
/**
 * Class: Clock
 */
export declare class Clock extends Simple {
  time: Date;
  interval: Interval;
  constructor();
  constructor(options: Object);
}
