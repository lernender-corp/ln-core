import * as Library from '../library/index';
import * as Constant from '../constant';

export class GridSort {

  toggleDirection() {
    if (this.direction === Constant.Direction.Ascending) {
      this.direction = Constant.Direction.Descending;
    } else {
      this.direction = Constant.Direction.Ascending;
    }
  }

  isAscending() {
    return (this.direction === Constant.Direction.Ascending);
  }

  isDescending() {
    return (this.direction === Constant.Direction.Descending);
  }

  isUnSorted() {
    return (this.direction === Constant.Direction.Unsorted);
  }

  constructor(options) {
    this.direction = Library.init(options, 'direction', Constant.Direction.Ascending);
    this.active = Library.init(options, 'active', false);
    this.disabled = Library.init(options, 'disabled', false);
  }
}
