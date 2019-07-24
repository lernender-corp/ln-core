export class EnumSymbol {
	constructor(name, { value, description }) {
		this.sym = Symbol.for(name);
		this.value = value;
		this.description = description;
		if (!Object.is(value, undefined)) this.value = value;
		if (description) this.description = description;
		Object.freeze(this);
	}

	get display() {
		return this.description || Symbol.keyFor(this.sym);
	}

	toString() {
		return this.sym.toString();
	}

	valueOf() {
		return this.value;
	}
}
