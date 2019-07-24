import * as Library from "../library/index";
import {Guid} from './guid';

describe('Guid()', () => {

  beforeEach(() => {
  });

  it('new Guid', () => {
    expect(Library.isStringWithLength(Guid.NEW())).toBe(true);
  });

  it('should have new CHAR', () => {
    expect(Library.isStringWithLength(Guid.CHAR())).toBe(true);
  });
});
