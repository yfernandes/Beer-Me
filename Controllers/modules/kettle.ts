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

	public transfer(destination) {
		// comment
	}

	public heatTo(temperature) {
		// comment
	}

	public recirculate(flowRate) {
		// comment
	}
}
