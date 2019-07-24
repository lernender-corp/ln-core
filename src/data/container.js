import * as Library from "../library/index";
import * as Constant from '../constant';
import {filter, find, each} from 'lodash-es';
import {Simple} from "../common/simple";
import {DataSource} from './datasource';

/**
 * Container
 */
export class Container extends Simple {

  /**
   * find()
   * @param uid
   * @returns {T}
   */
  find(uid) {
    if (Library.isStringWithLength(uid)) {
      const list = (filter(this.dataSource.data, o => {
        return o.uid === uid;
      }));
      return (list.length === 0 ? undefined : list[0]);
    }
  }

  /**
   * getActive
   * @returns {any[]}
   */
  getActive() {
    return (filter(this.dataSource.data, o => {
      return o.active;
    }));
  }


  /**
   * getChecked
   * @returns {any[]}
   */
  getChecked() {
    return (filter(this.dataSource.data, o => {
      return o.checked;
    }));
  }

  /**
   * isChecked()
   * @param obj
   * @returns {any}
   */
  isChecked(obj) {
    //
    // If we have a valid object
    //
    if (Library.isObject(obj)) {
      const item = find(this.dataSource.data, r => {
        return (r.uid === obj.uid);
      });

      if (Library.isDefined(item)) {
        return (item.checked);
      }
    }
    return false;
  }

  /**
   * setActive()
   * @param obj
   * @param active
   */
  setActive(obj, active = false) {
    //
    // If we have a valid object
    //
    if (Library.isObject(obj)) {
      each(this.dataSource.data, r => {
        r.active = (r.uid === obj['uid']);
      });
    } else if (Library.isNull(obj)) {
      if (Library.isBoolean(active)) {
        each(this.dataSource.data, r => {
          r.active = active;
        });
      }
    }
  }

  /**
   * setChecked()
   * @param obj
   * @param override
   */
  setChecked(obj, override = false) {
    if (Library.isBoolean(obj)) {
      each(this.dataSource.data, r => {
        r.checked = obj;
      });
    } else {
      //
      // If we have a valid object
      //
      if (Library.isObject(obj)) {
        let index = 0;
        let found = false;
        each(this.dataSource.data, r => {
          r.checked = (r.uid === obj['uid']);
          if (r.checked && !found) {
            found = true;
          }
          if (!found) {
            index++;
          }
        });
        //
        // Override the checked state
        //
        if (Library.isBoolean(override)) {
          this.dataSource.data[index].checked = override;
        }
      }
    }
  }

  /**
   * Constructor()
   * @param options
   */
  constructor(options) {
    super(options);
    this.dataSource = new DataSource(Library.init(options, 'dataSource', {}));
    this.selectionType = Library.init(options, 'selectionType', Constant.SelectionType.None);
  }
}
