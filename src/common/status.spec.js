import * as Library from "../library/index";
import * as Constant from "../constant";
import {Status} from './status';

describe('Status()', () => {

  const obj = new Status({
    type: Constant.Status.Active
  });

  it(`.type`, () => {
    expect(obj.type).toBe(Constant.Status.Active);
  });
  
});
