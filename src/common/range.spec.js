import * as Library from "../library/index";
import * as Constant from "../constant";
import {Range} from './range';

describe('Range()', () => {
  const obj = new Range({
    start: 5,
    end: 10,
    increment: 1
  });

  it(`.start should be`, () => {
    expect(Library.isNumber(obj.start)).toBe(true);
    expect(obj.start).toBe(5);
  });

  it(`.end should be `, () => {
    expect(Library.isNumber(obj.end)).toBe(true);
    expect(obj.end).toBe(10);
  });

  it(`.increment should be `, () => {
    expect(Library.isNumber(obj.increment)).toBe(true);
    expect(obj.increment).toBe(1);
  });


  it('.isArrayWithLength() should be true', () => {
    const obj = new Range();
    expect(Library.isArrayWithLength(obj.toArray())).toBe(true);
  });
});
