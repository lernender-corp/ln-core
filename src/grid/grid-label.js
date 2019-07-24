import * as Library from '../library/index';

/**
 * Class: GridLabel
 */
export class GridLabel {

  get total() {
    return this._total;
  }

  set total(value) {
    this._total = value;
    this.set(value);
  }

  get selected() {
    return this._selected;
  }

  set selected(value) {
    this._selected = value;
		this.set(value);
  }

  get label() {
    return this._label;
  }

  set(value) {
    this._label = this._format
      .replace('X', value)
      .replace('SUBJECT', this._getSubject());
  }

  _getSubject() {
    if (this._selected > 0) {
      return this._selectedLabel;
    } else {
      return this._subject;
    }
  }

  constructor(options) {
    this._format = Library.init(options, 'format', 'X SUBJECT');
    this._selected = Library.init(options, 'selected', 0);
    this._subject = Library.init(options, 'subject', 'objects');
    this._selectedLabel = Library.init(options, 'selectedLabel', 'selected');
    this._total = Library.init(options, 'total', 0);
  }
}
