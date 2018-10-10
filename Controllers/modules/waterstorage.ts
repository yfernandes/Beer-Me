import { pump, heater, TwoWayValve } from '../outputs';
import { } from '../sensors';

class WaterStorage {

	public valve;
	public heater;
	public flowMeter;
	public pump;

	constructor(pumpAddress, htAddress, twoWayValve) {
		this.pump = new pump(pumpAddress);
		this.heater = new heater(htAddress);
		this.valve = new TwoWayValve(twoWayValve);

	}

}
