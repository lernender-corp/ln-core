import * as Library from '../library/index';
import {Simple} from '../common/simple';


/**
 * Class: GridPreferenceCollection
 */
export class GridPreferenceCollection extends Simple {

  findByName(name, field = 'displayedFieldName') {
    const idx = this.findIndex(name, field);
    if (idx >= -1) {
      return this.items[idx];
    }
  }

  findById(id) {
    const idx = this.findIndex(id);
    if (idx >= -1) {
      return this.items[idx];
    }
  }

  findIndex(id, field = 'id') {
    return _.findIndex(this.items, (pref) => pref[field] === id);
  }

  getDefault() {
    const idx = _.findIndex(this.items, (pref) => pref.default);
    if (idx >= -1) {
      return this.items[idx];
    }
  }

  getActive() {
    const idx = _.findIndex(this.items, (pref) => pref.active);
    if (idx >= -1) {
      return this.items[idx];
    }
  }

  hasItems() {
    return Library.isArrayWithLength(this.items);
  }

  hasActive() {
    return this.hasList() && _.findIndex(this.items, item => item.active) !== -1;
  }

  hasDefault() {
    return !Library.isUndefined(this.getDefault());
  }

  setActive(id) {
    this.items.forEach(item => item.active = item.id === id);
  }

  setDefault(id) {
    this.items.forEach(item => item.default = item.id === id);
  }

  /**
   * Constructor()
   */
  constructor(options) {
    super(options);
    this.items = Library.init(options, 'items', []);
  }
}
