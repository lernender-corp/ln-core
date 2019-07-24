import {Point} from './point';

describe('Point()', () => {
  const options = {
    x: 8,
    y: 9,
    toString: `(${8}, ${9})`
  };
  const obj = new Point(options);

  it(`.x should be ${options.x}`, () => {
    expect(obj.x).toBe(options.x);
  });

  it(`.y should be ${options.y}`, () => {
    expect(obj.y).toBe(options.y);
  });

  it(`.toString should be ${options.toString}`, () => {
    expect(obj.toString()).toBe(options.toString);
  });
});
