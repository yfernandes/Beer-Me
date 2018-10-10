import { TwoWayValve } from '../outputs';
import { WeightSensor } from '../sensors';

export class GrainHandler {

	public weightSensor1;
	public weightSensor2;
	public valveSilo1;
	public valveSilo2;

	constructor(WS1, WS2, VlvAddress1, VlvAddress2) {
		this.weightSensor1 = new WeightSensor(WS1);
		this.weightSensor2 = new WeightSensor(WS2);
		this.valveSilo1 = new TwoWayValve(VlvAddress1);
		this.valveSilo2 = new TwoWayValve(VlvAddress2);
	}
}
