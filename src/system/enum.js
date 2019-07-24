import {EnumSymbol} from './enumSymbol';

export class Enum {
	constructor(enumLiterals) {
		for (let key in enumLiterals) {
			if (!enumLiterals[key]) {
				throw new TypeError('each enum should have been initialized with atleast empty {} value');
			}
			this[key] = new EnumSymbol(key, enumLiterals[key]);
		}
		Object.freeze(this);
	}
	symbols() {
		var list = [];
		for (let key of Object.keys(this)) {
			list.push(this[key]);
		}
		return list;
	}
	keys() {
		return Object.keys(this);
	}
	contains(sym) {
		if (!(sym instanceof EnumSymbol)) return false;
		return this[Symbol.keyFor(sym.sym)] === sym;
	}
}

