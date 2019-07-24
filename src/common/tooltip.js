import * as Library from "../library/index";
/**
 * Class: Tooltip
 */
export class Tooltip {
  /**
   * Constructor()
   * @param options
   */
  constructor (options) {
    this.content = Library.init(options, 'content', '');
    this.template = Library.init(options, 'template');
    this.style = Library.init(options, 'style', {});
    this.position = Library.init(options, 'position', {});
  }
}
