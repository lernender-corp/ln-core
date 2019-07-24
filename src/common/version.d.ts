import {Simple} from './simple';

/**
 * Class: Version
 */
export declare class Version extends Simple {
  expires: Date;
  major: number;
  minor: number;
  patch: number;
  constructor();
  constructor(options: Object);
}
