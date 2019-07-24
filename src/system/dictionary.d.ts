/**
 * @class Dictionary
 * @description Dictionary class
 */
export declare class Dictionary {
  add(key: string, value: any): any;
  containsKey(): boolean;
  keys(): string[];
  remove(): boolean;
  values(): any[];
  constructor();
  constructor(options: { key: string; value: string}[]);
}
