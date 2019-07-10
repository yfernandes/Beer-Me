// This module is responsible for controlling temperatures when said temperatures require cooling.
// Passive or Active cooling for that matter.
// Both Brewhouse and Fermenters shall be controlled with this class

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

	public	coolFermenter() {
		// Regulates temperature inside fermenter jacket using glycol chiller
	}

	public chiller() {
		// Dual stage chiller:
			// First plate chiller: Passive. Responsible for exchanging temperature with boiling wort to hopefully lower the ammount
			// of energy required to heat strike and sparge water

			// Second Plate chiller: Active. Responsible for achieving proper yeast pitching temperatures.
			// Exchanges temperature against glycol chiller
	}
}
