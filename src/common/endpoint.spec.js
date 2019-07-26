import { Endpoint } from "./endpoint";

describe('Endpoint()', () => {
  const obj = new Endpoint({
    url: 'awesome.Lernender.com/endpoint',
    headers: [
      {
        key: 'x-test',
        value: 'asdfasdfasdfasdfasdf'
      }
    ]
  });

  it('url', () => {
    expect(obj.hasUrl()).toBe(true);
  });

  it('headers', () => {
    expect(obj.hasHeaders()).toBe(true);
  });

  it(`headers can't be modified`, () => {
    const currentHeaderLength = obj.headers().length;
    obj.headers().push({
      key: 'fakeKey',
      value: 'HAHAHAHAHAHA!'
    });
    expect(obj.headers().length).toBe(currentHeaderLength);
  });

});
