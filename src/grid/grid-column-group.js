import * as Library from "../library/index";

/**
 * Class: GridColumnGroup
 */
export class GridColumnGroup {
  /**
   * Constructor()
   * @param options
   */
  constructor (options) {
    this.groupId = Library.init(options, 'groupId');
    this.open = Library.init(options, 'open', false);
  }
}
