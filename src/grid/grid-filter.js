import * as Constant from '../constant';
import * as Library from '../library/index';
import * as Validate from '../library/validate';
import { GridToken } from './grid-token';
import { differenceBy } from 'lodash-es';

/**
 * Class: GridFilter
 */
export class GridFilter {

  get tokens() {
    return this._tokens;
  }

  setTokens(type, tokens) {
    debugger;
    //
    // Clear Tokens
    //
    this.clear(type);
    //
    // Parse param tokens
    //
    if (Library.isArrayWithLength(tokens)) {
      let size = 1;
      for (let i = 0; i < tokens.length; i += size) {
        size =
          Validate.hasComparisonOperator(tokens[i]) ||
          Validate.hasInverseOperator(tokens[i])
            ? 2
            : 1;
        this._tokens.push(
          new GridToken({
            token: tokens.slice(i, i + size),
            dataType: this._dataType,
            type
          })
        );
      }
    }
  }

  //
  // type()
  //
  get type() {
    return this._type;
  }
  //
  // type()
  //
  set type(type) {
    this._type = type;
  }

  get focus() {
    return this._focus;
  }

  set focus(focus) {
    this._focus = focus;
  }
  get dataType() {
    return this._dataType;
  }

  hasTokens() {
    return Library.isArrayWithLength(this.tokens);
  }

  hasFocus() {
    return this.focus;
  }

  //
  // pristine()
  // Definition: A control is pristine if the user has not yet changed the data in the UI.
  //
  get pristine() {
    return this._pristine;
  }
  //
  // dirty()
  // Definition: A control is dirty if the user has changed the data in the UI.
  //
  get dirty() {
    return !this._pristine;
  }
  //
  // touched()
  // Definition: A control is marked touched once the user has triggered a blur event on it.
  //
  get touched() {
    return this._touched;
  }
  //
  // touched()
  // Definition: A control is marked touched once the user has triggered a blur event on it.
  //
  set touched(data) {
    this._touched = data;
  }
  //
  // untouched()
  // Definition: A control is untouched if the user has not yet triggered a blur event on it.
  //
  get untouched() {
    return !this._touched;
  }

  //
  // valid()
  // Definition: This control has passed all validation checks.
  //
  get valid() {
    return this._valid;
  }
  //
  // invalid()
  // Definition: This control has failed at least one validation check.
  //
  get invalid() {
    return !this._valid;
  }
  //
  // pending()
  // Definition: This control is in the midst of conducting a validation check.
  //
  get pending() {
    return this._pending;
  }
  //
  // hidden()
  // Definition: This control has hidden style.
  //
  get hidden() {
    return this._hidden;
  }
  //
  // disabled()
  // Definition: This control is exempt from validation checks.
  //
  get disabled() {
    return this._disabled;
  }

  clear(type = 0, tokens) {
    debugger;
    //
    // Switch on type
    //
    switch(type) {
      case Constant.FILTER_TYPE_INTERNAL:
      case Constant.FILTER_TYPE_EXTERNAL:
        if (Library.isDefined(tokens)) {
          this._tokens = differenceBy(this._tokens, tokens, 'value');
        } else {
          //
          //  If there are token then remove the corresponding
          //  tokes assocaited with the type
          //
          if (Library.isArrayWithLength(this._tokens)) {
            this._tokens = this._tokens.filter(t => ((t.type & type) !== type));
          }
        }
        break;
      default:
        this._status = undefined;
        this._disabled = false;
        this._pending = false;
        this._pristine = true;
        this._touched = false;
        this._valid = false;
        this._focus = false;

        if (Library.isArrayWithLength(this._tokens)) {
          this._tokens.length = 0;
        }
        this._tokens = [];
        break;
    }
  }

  constructor(options) {
    this.clear(Constant.FILTER_TYPE_NONE);
    this._dataType = Library.init(options, 'dataType', 'string').toLowerCase();
    this._hidden = Library.init(options, 'hidden', false);
    this.enabled = Library.init(options, 'enabled', false);
    this.style = Library.init(options, 'style', {});
    this.type = Library.init(options, 'type', Constant.FILTER_TYPE_NONE);
  }
}
