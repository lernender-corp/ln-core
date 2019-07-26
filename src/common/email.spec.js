import * as Library from "../library/index";
import {Email} from './email';

describe('Email()', () => {
  const obj = new Email({
		id: 77,
		name: 'Shawn Lovelidge',
    address:'shawn.lovelidge@lernender.com',
    hidden: true,
    disabled: true
  });

  it(`address()`, () => {
    expect(obj.isValid()).toBe(true);
  });

  it(`hasType()`, () => {
    expect(obj.hasType()).toBe(true);
  });
})
