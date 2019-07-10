// This module is responsible to control the amount of stored water and handles strike water heating.
	// Should communicate with cooling module to resolve temperature of HWT0

import { Pump, Heater, TwoWayValve } from '../outputs';
import { } from '../sensors';

export class WaterStorage {

	public HWT;
	public CWT;
	public valve;
	public heater;
	public flowMeter;
	public pump;

	constructor(pumpAddress, htAddress, twoWayValve) {
		this.pump = new Pump(pumpAddress);
		this.heater = new Heater(htAddress);
		this.valve = new TwoWayValve(twoWayValve);

	}

	public fill(fillRate, fillTemp) {
		// Fills kettle @fillRate && @fillTemp
	}

	public heatHWT(temp) {
		// PID heates to temp, if no other option is available
	}

	public getVolume(container) {
		// container.sensor
	}

	public toCIP() {
		// Transfer to CIP's rinse water
	}
}
