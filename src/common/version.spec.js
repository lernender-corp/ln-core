import {Version} from './version';

describe('Version()', () => {
  const options = {
    major: 2,
    minor: 3,
    patch: 4,
    expires: new Date()
  };
  const obj = new Version(options);

  it(`.major should be ${options.major}`, () => {
    expect(obj.major).toBe(options.major);
  });

  it(`.minor should be ${options.minor}`, () => {
    expect(obj.minor).toBe(options.minor);
  });

  it(`.patch should be ${options.patch}`, () => {
    expect(obj.patch).toBe(options.patch);
  });

});
