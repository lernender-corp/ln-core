import * as Library from "../library/index";
import { Simple } from './simple';

describe('Simple()', () => {
	const options = {
		id: 77,
    name: 'Base A',
		description: 'Base Description',
		active: true,
		disabled: true,
		hidden: false,
	};
  const obj = new Simple(options);

  it(`property id`, () => {
    expect(Library.isNumber(options.id)).toBe(true);
    expect(obj.hasId()).toBe(true);
    expect(obj.id).toBe(options.id);
	});

	it(`property name`, () => {
		expect(Library.isStringWithLength(options.name)).toBe(true);
		expect(obj.hasName()).toBe(true);
    expect(obj.name).toBe(options.name);
	});

	it(`property description`, () => {
    expect(Library.isStringWithLength(options.description)).toBe(true);
		expect(obj.hasDescription()).toBe(true);
		expect(obj.description).toBe(options.description);
	});

	it(`property active`, () => {
		expect(Library.isBoolean(options.active)).toBe(true);
		expect(obj.isActive()).toBe(true);
		expect(obj.active).toBe(options.active);
	});

	it(`property disabled`, () => {
		expect(Library.isBoolean(options.disabled)).toBe(true);
		expect(obj.isVisible()).toBe(true);
		expect(obj.disabled).toBe(options.disabled);
	});

	it(`property hidden`, () => {
		expect(Library.isBoolean(options.hidden)).toBe(true);
		expect(obj.hidden).toBe(options.hidden);
	});

});
