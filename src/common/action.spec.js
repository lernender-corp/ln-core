import * as Library from '../library/index';
import { Action } from './action';
import * as Constant from '../constant';

describe('Action()', () => {
  const obj = new Action({
    id: 77,
    name: 'Base A',
    description: 'Base Description',
    url: 'http://google.com',
    checked: true,
    active: true,
    disabled: true,
    hidden: false
  });
  const obj2 = new Action({
    id: 77,
    name: 'Base A',
    description: 'Base Description',
    url: 'http://google.com',
    checked: Constant.Checkbox.Deselect,
    active: true,
    disabled: true,
    hidden: false
  });

  it(`onClick`, () => {
    expect(Library.isDefined(obj.onClick)).toBe(true);
    expect(Library.isFunction(obj.onClick)).toBe(true);
    expect(obj.hasOnClick()).toBe(true);
  });

  it(`checked`, () => {
    expect(Library.isBoolean(obj.checked)).toBe(true);
    expect(obj.checked).toBe(true);
    expect(obj2.checked).toBe(Constant.Checkbox.Deselect);
  });
});
