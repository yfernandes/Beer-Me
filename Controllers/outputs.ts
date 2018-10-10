class OutputClass {

	public address;
	constructor(address) {
		this.address = address;
	}
}

export class MaltDispenser extends OutputClass {
	constructor(address) {
		super(address);

	}

	public setPosition() {
		// Update Position
	}
}

export class HopDispenser extends OutputClass {
	constructor(address) {
		super(address);
		// Max Output cannot exceed the number of slots on the dispenser
	}

	public setPosition() {
		// Update Position
	}
}

// tslint:disable-next-line:max-classes-per-file
export class Relay extends OutputClass {
	constructor(address) {
		super(address);
	}

	public turnOn() {
		// comment
	}

	public turnOff() {
		// comment
	}
}

// tslint:disable-next-line:max-classes-per-file
export class TwoWayValve extends OutputClass {

	public type;
	constructor (address) {
		super(address);

	}

	public setPosition() {
		// Update Position
	}

}

// tslint:disable-next-line:max-classes-per-file
export class ThreeWayValveL extends OutputClass {

	public type;
	constructor (address) {
		super(address);

	}

	public setPosition() {
		// Update Position
	}

}

// tslint:disable-next-line:max-classes-per-file
export class ThreeWayValveT extends OutputClass {
	constructor (address) {
		super(address);

	}

	public setPosition() {
		// Update Position
	}

}

// tslint:disable-next-line:max-classes-per-file
export class Pump extends OutputClass {
	constructor (address) {
		super(address);

	}

	public setPosition() {
		// Update Position
	}

}

// tslint:disable-next-line:max-classes-per-file
export class Heater extends OutputClass {
	constructor (address) {
		super(address);

	}

	public setPosition() {
		// Update Position
	}

}
