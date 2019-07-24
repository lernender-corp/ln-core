import * as Library from '../library/index';
import * as Constant from '../constant';
/**
 * Class: GridToken
 */
export class GridToken {

  get() {
    return this._token;
  }

  set(tokens) {
    //
    // Clear (this)
    //
    this.clear();
    //
    // Parse param tokens
    //
    if (Library.isArrayWithLength(tokens)) {
      this._token = undefined;
      this._equality = Constant.Equality.Equal;

      tokens.forEach(token => {
        if (!Library.isNullOrUndefined(token)) {
          if (token === '-' || token === '!') {
            this._equality = Constant.Equality.Not;
          } else if (token === '<' || token === '>') {
            this._equality =
              token === '<'
                ? Constant.Equality.LessthanOrEqual
                : Constant.Equality.GreaterThanOrEqual;
          } else {
            try {
              if (this._dataType === 'string') {
                this._token = token;
              } else if (this._dataType === 'number') {
                this._token = parseInt(token, 10);
              } else if (this._dataType === 'float') {
                this._token = Math.trunc(parseFloat(token));
              } else if (this._dataType === 'boolean') {
                const _token = token
                  .toString()
                  .toLowerCase()
                  .trim();
                const _true =
                  _token === '1' ||
                  _token === 'on' ||
                  _token === 'true' ||
                  _token === 'yes';
                this._token = _true;
              } else if (this._dataType === 'date') {
                this._token = new Date(token);
              }
            } finally {
              if (this._pristine) {
                this._pristine = false;
              }
            }
          }
        }
      });
    }

    if (this.hasToken()) {
      this._value = this._token;
    }
  }

  get dataType() {
    return this._dataType;
  }

  hasToken() {
    return Library.isDefined(this._token);
  }

  //
  // value()
  //
  get value() {
    return this._value;
  }
  //
  // type()
  //
  get type() {
    return this._type;
  }
  //
  // equality()
  //
  get equality() {
    return this._equality;
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
  // disabled()
  // Definition: This control is exempt from validation checks.
  //
  get disabled() {
    return this._disabled;
  }

  //
  // valid()
  // Definition: This control has failed at least one validation check.
  //
  get errors() {
    return this._errors;
  }
  //
  // isBoolean()
  //
  isBoolean() {
    return this._dataType === 'boolean';
  }
  //
  // isNumber()
  //
  isNumber() {
    return this._dataType === 'number';
  }
  //
  // isStringisString()
  //
  isString() {
    return this._dataType === 'string';
  }
  //
  // isDate()
  //
  isDate() {
    return this._dataType === 'date';
  }

  clear() {
    this._status = undefined;
    this._disabled = false;
    this._errors = [];
    this._errors.length = 0;
    this._pending = false;
    this._pristine = true;
    this._touched = false;
    this._valid = false;
    this._token = undefined;
    this._value = undefined;
    this._equality = Constant.Equality.None;
  }

  constructor(options) {
    this.clear();
    this._dataType = Library.init(options, 'dataType', 'string').toLowerCase();
    this._equality = Library.init(options, 'equality', Constant.Equality.None);
    this._type = Library.init(options, 'type', Constant.FILTER_TYPE_NONE);
    this.enabled = Library.init(options, 'enabled', false);
    //
    // Set the token
    //
    this.set(Library.init(options, 'token', []));

  }
}
