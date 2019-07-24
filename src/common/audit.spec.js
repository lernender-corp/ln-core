import * as Library from '../library/index';
import { Audit } from './audit';

describe('Audit()', () => {
	const options = {
		createdAt: '05-17-2019 19:34:02',
		createdBy: '138429',
		createUpdateTraceId: '0ceef988-d982-4391-811d-81cd1dedece4',
		expiresAt: '06-16-2019 19:34:02'
	};
  const obj = new Audit(options);

  it(`property createdAt`, () => {
    expect(Library.isStringWithLength(options.createdAt)).toBe(true);
    expect(Library.isStringWithLength(obj.createdAt)).toBe(true);
    expect(options.createdAt).toBe(obj.createdAt);
	});

	it(`property createdBy`, () => {
    expect(Library.isStringWithLength(options.createdBy)).toBe(true);
    expect(Library.isStringWithLength(obj.createdBy)).toBe(true);
    expect(options.createdBy).toBe(obj.createdBy);
	});

	it(`property createUpdateTraceId`, () => {
    expect(Library.isStringWithLength(options.createUpdateTraceId)).toBe(true);
    expect(Library.isStringWithLength(obj.createUpdateTraceId)).toBe(true);
    expect(options.createUpdateTraceId).toBe(obj.createUpdateTraceId);
	});

	it(`property expiresAt`, () => {
    expect(Library.isStringWithLength(options.expiresAt)).toBe(true);
    expect(Library.isStringWithLength(obj.expiresAt)).toBe(true);
    expect(options.expiresAt).toBe(obj.expiresAt);
	});

});
