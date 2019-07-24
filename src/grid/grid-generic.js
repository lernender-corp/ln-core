import * as Library from "../library/index";
import {Simple} from '../common/simple';

/**
 * @class GridGeneric
 * @description Defines a generic html object for a container.
 */
export class GridGeneric extends Simple {

  isChecked() {
    return (this.checkbox.checked);
  }

  isCheckboxHidden() {
    return (this.checkbox.hidden);
  }

  isDeleted() {
    return (this.deleted);
  }

  isActivate() {
    return (this.active);
  }

  hasTemplate() {
    return (Library.isStringWithLength(this.template));
  }

  isExpanded() {
    return (this.expanded);
  }

  hasFormat() {
    return (Library.isStringWithLength(this.format));
  }

  hasContent() {
    if (Library.isDefined(this.data)) {
      if (Library.hasOwnProperty(this.data, this.contentField)) {
        return Library.isArrayWithLength(this.data[this.contentField])
      }
    }

    return false;
  }

  constructor(options) {
    super(options);
    this.active = Library.init(options, 'active', false);
    this.canActivate = Library.init(options, 'canActivate', false);
    this.canCheck = Library.init(options, 'canCheck', false);
    this.canDelete = Library.init(options, 'canDelete', false);
    this.checked = Library.init(options, 'checked', false);
    this.data = Library.init(options, 'data', {});
    this.deleted = Library.init(options, 'deleted', false);
    this.element = Library.init(options, 'element');
    this.contentField = Library.init(options, 'contentField', 'children');
    this.format = Library.init(options, 'format');
    this.label = Library.init(options, 'label');
    this.options = Object.assign({}, Library.init(options, 'options', {}));
    this.pattern = Library.init(options, 'pattern');
    this.placeholder = Library.init(options, 'placeholder');
    this.required = Library.init(options, 'required', false);
    this.selected = Library.init(options, 'selected', false);
    this.style = Library.init(options, 'style', {});
    this.template = Library.init(options, 'template');
    this.type = Library.init(options, 'type');
    this.checkbox = Library.init(options, 'checkbox', {
      checked: false,
      hidden: true
    });
  }
}
