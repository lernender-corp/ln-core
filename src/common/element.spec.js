import * as Library from '../library/index';
import { Element } from './element';

describe('Element()', () => {
	const obj = new Element({
		id: 77,
		name: 'Base A',
		description: 'Base Description',
		url: 'http://google.com',
		tooltip: 'ToolTip',
		icon: {
			id: 1,
			name: 'search',
			enabled: true,
			hidden: true
		},
		ref: {
			id: 1
		},
		labelClassList: ['class1', 'class2'],
		html: '<span>Shawn<span>',
		placeholder: 'placeholder',
		checked: true,
		active: true,
		disabled: true,
		hidden: false
	});

	it(`tooltip`, () => {
		expect(Library.isObject(obj.tooltip)).toBe(true);
	});

	it(`icon`, () => {
		expect(Library.isDefined(obj.icon)).toBe(true);
		expect(obj.hasIcon()).toBe(true);
	});

	it(`ref`, () => {
		expect(Library.isDefined(obj.ref)).toBe(true);
		expect(obj.hasRef()).toBe(true);
	});

	it(`html`, () => {
		expect(Library.isStringWithLength(obj.html)).toBe(true);
	});

	it('labelClassList', () => {
		expect(Library.isArrayWithLength(obj.labelClassList)).toBe(true);
	});

	it(`placeholder`, () => {
		expect(Library.isStringWithLength(obj.placeholder)).toBe(true);
	});
});
