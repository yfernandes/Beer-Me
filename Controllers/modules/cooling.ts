import { TempSensor, FlowSensor } from '../sensors';
import { TwoWayValve } from '../outputs';

export class Cooling {

	public tempSensor1;
	public tempSensor2;
	public valve;
	public flowMeter;

	constructor(TmpSnsAddress1 , TmpSnsAddress2 , VlvAddress, flwSns) {

		this.tempSensor1 = new TempSensor (TmpSnsAddress1);
		this.tempSensor2 = new TempSensor (TmpSnsAddress2);
		this.valve       = new TwoWayValve(VlvAddress);
		this.flowMeter   = new FlowSensor(flwSns);
	}
}
