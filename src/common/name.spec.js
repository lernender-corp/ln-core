import {Name} from './name';

describe('Name()', () => {
  const options = {
    title: 'Mr.',
    first:'Shawn',
    middle: 'D',
    last: 'Larkins'
  };
  const obj = new Name(options);

  it(`.title should be ${options.title}`, () => {
    expect(obj.title).toBe(options.title);
  });
 
  it(`.first should be ${options.first}`, () => {
    expect(obj.first).toBe(options.first);
  });

  it(`.middle should be ${options.middle}`, () => {
    expect(obj.middle).toBe(options.middle);
  });

  it(`.last should be ${options.last}`, () => {
    expect(obj.last).toBe(options.last);
  });

});
