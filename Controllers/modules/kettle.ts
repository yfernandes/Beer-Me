// Controls the all flow related to the instance of the Kettle

import { Pump, TwoWayValve, ThreeWayValveL, Heater } from '../outputs';
import { TempSensor } from '../sensors';

export class Kettle {

	public kettleTempSensor;
	public inputTempSensor;
	public outputTempSensor;
	public pump;
	public mainValve;
	public transferValve;
	public heater;

	constructor(kettleTempSensor, inputTempSensor, outputTempSensor, pumpAddress, kettleValveAddress, transferValveAdress, heaterAddress) {

		this.kettleTempSensor = new TempSensor(kettleTempSensor);
		this.inputTempSensor = new TempSensor(inputTempSensor);
		this.outputTempSensor = new TempSensor(outputTempSensor);
		this.pump = new Pump(pumpAddress);
		this.mainValve = new TwoWayValve(kettleValveAddress);
		this.transferValve = new ThreeWayValveL(transferValveAdress);
		this.heater = new Heater(heaterAddress);
	}

	public transferToNext() {
		// Transfer contents of kettle to next kettle on hierarchy
	}

	public heatTo(temperature) {
		// Controlled by a PID to heat to a certain temp
	}

	public maintainTemp(temperature) {
		// Does what it says
	}

	public recirculate(flowRate) {
		// Does what it says
	}

	public CIP() {
		// When kettle is empty of wort remove grain and run acid and rinse water loop
	}
}
