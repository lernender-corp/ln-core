import * as Library from "../library/index";
import {Simple} from "./simple";
import {Interval} from "./interval";
/**
 * Class: Clock
 */
export class Clock extends Simple {
  /**
   * Constructor()
   * @param options
   */
  constructor (options) {
    super(options);
    this.time = Library.init(options, 'time', new Date());
    this.interval =  new Interval(Library.init(options, 'interval', {
      hour: 1,
      minute: 1,
      second: 1
    }));
  }
}

