import { GridColumn } from "./grid-column";

export declare class GridUser {
    public columns: any[] | GridColumn[];
    public hasColumns(): boolean;
    constructor();
    constructor(options: Object);
  }
