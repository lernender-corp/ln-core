import * as Library from "../library/index";
import {Image} from './image';

describe('Image()', () => {
  const obj = new Image({
    href:'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    style: {
      height: '100px',
      width: '100px',
    }
  });

  it(`hrefurl`, () => {
    expect(obj.hasHRef()).toBe(true);
  });

  it('style', () => {
    expect(obj.hasStyle()).toBe(true);
  });

});
