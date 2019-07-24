import * as Library from "../library/index";
import {Base} from './base';

describe('Base()', () => {
  const obj = new Base({
    id: 77,
    name:'Base A',
    description: 'Base Description',
    type: {},
    label: 'Label',
    hidden: true,
    disabled: true
  });

  it(`hasLabel()`, () => {
    expect(obj.hasLabel()).toBe(true);
  });

  it(`hasType()`, () => {
    expect(obj.hasType()).toBe(true);
    obj.type = undefined;
    expect(obj.hasType()).toBe(false);
  });

})
