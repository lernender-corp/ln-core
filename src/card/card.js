import * as Library from "../library/index";
import {Simple} from '../common/simple';
/**
 * Class: Card
 */
export class Card extends Simple {
  /**
   * Constructor()
   * @param options
   */
  constructor(options) {
    super(options);
    this.canActivate =  Library.init(options, 'canActivate', false);
    this.canCheck =  Library.init(options, 'label', false);
    this.canDelete =  Library.init(options, 'canDelete', false);
    this.checked =  Library.init(options, 'checked');
    this.style =  Library.init(options, 'style', {});
    this.label =  Library.init(options, 'label');
    this.data =  Library.init(options, 'data', {});
    this.onClick = Library.init(options, 'onClick', () => {
    });
  }
}
