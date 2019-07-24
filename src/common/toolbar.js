import * as Library from "../library/index";
import {Item} from './item';

export class Toolbar extends Item {
  constructor(options) {
    super(options);
    this.items = [];
    if (Library.hasOwnProperty(options, 'items')) {
      if (Library.isArrayWithLength(options.items)) {
       this.items =  options.items.map(item => {
          return new Item(item);
        })
      }
    }
  }
}
