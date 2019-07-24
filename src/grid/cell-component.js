import * as Library from '../library/index';
import { Simple } from '../common/simple';

export class CellComponent extends Simple {

    hasItems() {
        return Library.isArrayWithLength(this.items);
    }
    /**
     * Constructor()
     * @param options
     */
    constructor(options) {
        super(options);
        this.align = Library.init(options, 'align', 'left');
        this.checkAllFieldValue = Library.init(options, 'checkAllFieldValue', 'All');
        this.cols = Library.init(options, 'cols', 10);
        this.dataTextField = Library.init(options, 'dataTextField', 'name');
        this.dataValueField = Library.init(options, 'dataValueField', 'id');
        this.default = Library.init(options, 'default');
        this.disabled = Library.init(options, 'disabled', false);
        this.hidden = Library.init(options, 'hidden', false);
        this.hover = Library.init(options, 'hover', false);
        this.indeterminate = Library.init(options, 'indeterminate', false);
        this.indicatorIcon = Library.init(options, 'indicatorIcon', 'checkmark');
        this.items = Library.init(options, 'items', []);
        this.label = Library.init(options, 'label', '');
        this.maxlength = Library.init(options, 'maxlength', 255);
        this.minlength = Library.init(options, 'minlength', 10);
        this.multiple = Library.init(options, 'multiple', false);
        this.onValueChange = Library.init(options, 'onValueChange');
        this.pattern = Library.init(options, 'pattern', '');
        this.placeholder = Library.init(options, 'placeholder', '');
        this.rows = Library.init(options, 'rows', 1);
        this.style = Library.init(options, 'style', {});
        this.tooltip = Library.init(options, 'tooltip', false);
        this.type = Library.init(options, 'type', '');
        this.value = Library.init(options, 'value');
        this.visibility = Library.init(options, 'visibility', true);
    }
}
