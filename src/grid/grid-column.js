import * as Library from '../library/index';
import { Action } from '../common/action';
import { GridField } from './grid-field';
import { GridSort } from './grid-sort';
import { GridFilter } from './grid-filter';
import { GridHeader } from './grid-header';
import { FilterComponent } from './filter-component';
import { TooltipComponent } from './tooltip-component';
import { CellComponent } from './cell-component';

/**
 * Class: GridColumn
 */
export class GridColumn extends Action {
  fieldName() {
    let field = '';

    if (Library.isObject(this.field)) {
      if (!this.hasFieldObjectReference()) {
        field = this.field.name;
      } else {
        if (this.field.name.split('.').length > 1) {
          field = this.field.name.split('.')[1];
        } else {
          _.each(this.field.name.split('.'), prop => {
            field += field.length === 0 ? prop : Library.camelCase(prop);
          });
        }
      }
    }
    return field;
  }

  canFilter() {
    return this.filter.enabled;
  }

  canResize() {
    return this.resizeable;
  }

  hasLink() {
    return Library.isStringWithLength(this.link);
  }

  hasDefaultDisplay() {
    return Library.isStringWithLength(this.defaultDisplay);
  }

  hasFilter() {
    return this.filter.enabled && this.filter.hasTokens();
  }

  hasPattern() {
    return Library.isStringWithLength(this.pattern);
  }

  hasField() {
    return Library.isStringWithLength(this.field.name);
  }

  hasFieldObjectReference() {
    return this.hasField() && this.field.name.indexOf('.') > -1;
  }

  hasCellComponent() {
    return Library.isObject(this.cellComponent);
  }

  hasCustomFilter() {
    return !Library.isNullOrUndefined(this.onCustomFilter);
  }

  hasDelimeter() {
    return !Library.isNullOrUndefined(this.filterDelimeter);
  }

  hasFilterOperator() {
    return !Library.isNullOrUndefined(this.filterOperator);
  }

  hasFilterCriteria() {
    return !Library.isNullOrUndefined(this.filterCriteria);
  }

  hasStartsWithFilterCriteria() {
    return this.hasFilterCriteria() && this.filterCriteria === 'startsWith';
  }

  hasQuickFilter() {
    return this.hasFilter();
  }

  setQuickFilter(type, data) {
    this.filter.setTokens(type, data || []);
    return true;
  }

  hasCellRender() {
    return Library.isFunction(this.onCellRender);
  }

  /**
   * Constructor()
   * @param options
   */
  constructor(options) {
    super(options);

    this.align = Library.init(options, 'align', 'left');
    this.defaultDisplay = Library.init(options, 'defaultDisplay', '');
    this.cellComponent = new CellComponent(
      Library.init(options, 'cellComponent', {})
    );
    this.field = new GridField(Library.init(options, 'field', {}));
    //
    // SDL: This filter's property needs to be refactored
    //      ultimately means the schema needs to be refactored for filters.
    //
    this.filter = new GridFilter(
      Library.init(options, 'filter', {
        dataType: Library.init(options, 'dataType', 'string').toLowerCase(),
        hidden: Library.init(options, 'filterHidden', false),
        enabled: Library.init(options, 'filterEnable', false)
      })
    );
    this.filterComponent = new FilterComponent(
      Library.init(options, 'filterComponent', {})
    );
    this.filterCriteria = Library.init(options, 'filterCriteria', 'contains');
    this.filterDelimeter = Library.init(options, 'filterDelimeter', /[ ,]+/gim);
    this.filterOperator = Library.init(options, 'filterOperator', 'or');
    this.flexBase = Library.init(options, 'flexBase', 'auto');
    this.onCellRender = Library.init(options, 'onCellRender');
    this.onCustomFilter = Library.init(options, 'onCustomFilter');
    this.onFilter = Library.init(options, 'onFilter', (data, column) => {});
    this.onQuickFilter = Library.init(
      options,
      'onQuickFilter',
      (row, column) => {}
    );
    this.onRule = Library.init(options, 'onRule');
    this.order = Library.init(options, 'order', 1);
    this.pattern = Library.init(options, 'pattern');
    this.pinned = Library.init(options, 'pinned', null);
    this.placeholder = Library.init(options, 'placeholder', '');
    this.resizeable = Library.init(options, 'resizeable', true);
    this.showOnlyOnHover = Library.init(options, 'showOnlyOnHover', false);
    this.sort = new GridSort(Library.init(options, 'sort', {}));
    this.tooltipComponent = new TooltipComponent(
      Library.init(options, 'tooltipComponent', {})
    );

    this.style = {
      textAlign: `${this.align}`
    };

    //
    // SDL remove ancellary properties... (i.e. width, height, align, etc. to style)
    //
    if (Library.hasOwnProperty(options, 'style')) {
      this.width = Library.init(options.style, 'width');
      this.maxWidth = Library.init(options.style, 'maxWidth');
      this.minWidth = Library.init(options.style, 'minWidth');

      if (Library.hasOwnProperty(options.style, 'flex')) {
        this.flex = options.style['flex'];
      } else {
        this.flex = `0 0 ${this.width}`;
      }

      this.style = Object.assign({}, this.style, {
        flex: `${this.flex}`,
        minWidth: `${this.minWidth}`
      });
    }

    //
    // Construct GridHeader with column default style
    //
    const header = Library.init(options, 'header', {});
    const headerStyle = Library.init(header, 'style', {});
    this.header = new GridHeader({
      ...header,
      style: {
        ...this.style,
        ...headerStyle
      }
    });
  }
}
