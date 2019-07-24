import * as Library from "../library/index";
import * as Constant from "../constant";
import {Phone} from './phone';

describe('Phone()', () => {
  const options = {
    type: Constant.Phone.Work,
    number: '5551112222'
  };
  const obj = new Phone(options);

  it(`.type`, () => {
    expect(obj.type).toBe(options.type);
  });

  it(`.number`, () => {
    expect(obj.number).toBe(options.number);
  });

  it('.type should be Constant.Phone.Cell', () => {
    const obj = new Phone();
    expect(obj.type).toBe(Constant.Phone.Cell);
  });

  it('.number should be undefined', () => {
    const obj = new Phone();
    expect(obj.number).toBeUndefined();
  });

});
