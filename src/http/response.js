import * as Library from "../library/index";
import { Error } from './error';

/**
 * Response
 */
export class Response {

  hasErrors() {
    return Library.isArrayWithLength(this.errors);
  }

  hasData() {
    return (
      Library.isArrayWithLength(this.data) ||
      (!Library.isArray(this.data) && Library.isObject(this.data))
    );
  }

  /**
   * constructor()
   */
  constructor(options, map, pagination = {}) {
		this.data = [];
		this.total = 0;
    this.errors = [];
    this.summary = {
      
    }
    this.pagination = Object.assign({}, {
      pageNo: 0,
      pageSize: 0,
      totalPages: 0,
      totalRecords: 0
    }, pagination);

    if (Library.isObject(options)) {
      if (Library.isArrayWithLength(options)) {
        //
        // if no map defined then...
        //
        if (Library.isUndefined(map)) {
          this.data = [...options];
        } else {
          this.data = options.map(o => {
            return map(o);
          });
        }
      } else if (!Library.isArray(options)) {
        //
        // if no map defined then...
        //
        if (Library.isUndefined(map)) {
          this.data.push(options);
        } else {
          const obj = map(options);
          this.data.push(obj);
        }
      }

      this.errors = [];

      if (Library.hasOwnProperty(options, 'errors')) {
        this.errors = options.errors.map(e => {
          return new Error(e);
        });
      }

      this.total = Library.init(options, 'total', 0);
    }
  }
}
