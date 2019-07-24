import * as Library from "../library/index";
import {Icon} from './icon';
import { Tooltip } from "./tooltip";

describe('Icon()', () => {
  const obj = new Icon({
    url:'www.google.com',
    style: {
      height: '100px',
      width: '100px',
    },
    tooltip: new Tooltip(),
    color: 'red',
    backgroundColor: 'red',
    onclick: () => {},
  });

  it(`url`, () => {
    expect(obj.hasUrl()).toBe(true);
  });

  it('style', () => {
    expect(obj.hasStyle()).toBe(true);
  });

  it('color', () => {
    expect(obj.hasColor()).toBe(true);
  });
  it('backgroundColor', () => {
    expect(obj.hasBackgroundColor()).toBe(true);
  });
  it('tooltip', () => {
    expect(Library.isDefined(obj.tooltip)).toBe(true);
  });
});
