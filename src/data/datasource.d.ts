/**
 * Class: DataSource
 */
export declare class DataSource {
  data: any;
  exists(): boolean;
  firstOrDefault(): any;
  flush(): void;
  length(): number;
  pageSet: any;
  private _data: any;
  constructor();
  constructor(options: Object);
}
