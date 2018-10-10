/*

RPI
- Configure controllers (Arduinos)
- Get Device Adressess
- Configure Serial Communication

*/

import { Kettle } from './modules/kettle';
import { GrainHandler } from './modules/grains';
import { Cooling } from './modules/cooling';

export class Brewhouse {

	public mashTun: Kettle;
	public lauterTun: Kettle;
	public boilKettle: Kettle;
	public mill: GrainHandler;
	public chiller: Cooling;

	constructor(
		MashTunTempSensor, MashTunInputTempSensor, MashTunOutTempSensor, MashTunPump, MashTunValve, MashTunTransfValve, MashTunHeater,
		LauterTunTempSensor, LauterTunInputTempSensor, LauterTunOutTempSensor, LauterTunPump, LauterTunValve, LauterTunTrasnfValve, LTHeater,
		BKTempSensor, BKInputTempS, BKOutputTempS, BKPump, BkValve, BkTransferValve, BKHeater,
		GrainSilo1, GrainSilo2, MillValve1, MillValve2,
		ChillerTempSensor1, ChillerTempSensor2, ChillerValve, ChillerFlowSensor) {

		this.mashTun = new Kettle
		(MashTunTempSensor, MashTunInputTempSensor, MashTunOutTempSensor, MashTunPump, MashTunValve, MashTunTransfValve, MashTunHeater);

		this.lauterTun = new Kettle
		(LauterTunTempSensor, LauterTunInputTempSensor, LauterTunOutTempSensor, LauterTunPump, LauterTunValve, LauterTunTrasnfValve, LTHeater);

		this.boilKettle = new Kettle
		(BKTempSensor, BKInputTempS, BKOutputTempS, BKPump, BkValve, BkTransferValve, BKHeater);

		this.mill = new GrainHandler(GrainSilo1, GrainSilo2, MillValve1, MillValve2);

		this.chiller = new Cooling(ChillerTempSensor1, ChillerTempSensor2, ChillerValve, ChillerFlowSensor);

	}
}
