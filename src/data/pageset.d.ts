import {Page} from './page';

export declare class PageSet {
  readonly pageSize: number;
  readonly length: number;
  ActivePage(): Page;
  clear(): void;
  end(): number;
  hasPages(): boolean;
  indexId: number;
  next(): number;
  pages(): Page[];
  previous(): number;
  start(): number;
  toArray(): number[];

  private _pages: Page[];
  private _pageSize: number;
  private _length: number;
  private _indexId: number;
  private _createSets() : void;
  constructor();
  constructor(options: Object);
}
