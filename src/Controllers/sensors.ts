export class Sensor {

	public address;
	constructor (address) {
		this.address = address;
	}
}

export class WeightSensor extends Sensor {

	public weight: Number;
	constructor (address) {
		super(address);
	}
}

export class TempSensor extends Sensor {

	public temperature: Number;
	constructor (address) {
		super(address);
	}

	public getTemp(address) {
		// Do calculations
	}
}

// tslint:disable-next-line:max-classes-per-file
export class FlowSensor extends Sensor {

	public temperature: Number;
	constructor (address) {
		super(address);
	}
}
