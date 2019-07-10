# BEER.ME

## Brewing Processes

### Milling

- Weight Grains.
- Mill Grains.
  
### Mash in

- Add strike water to MashTun
- Heat strike water to temperature _"x"_
- Dump Grains
- Hold temperature _"x"_ for _"w"_ minutes

### Mash out

- Raise temp to _"y"_
- Hold temp _"y"_ for _"z"_ minutes
- Recirculate for _"a"_ time
- Measure sugar dilution with iodine test

### Lautering

- Transfer to Lauter Tun
- Recirculate for _"b"_ minutes
- Transfer to Boil kettle && Add Sparge Water
- Remove Grains.

### Boil

- Heat to boil
- Add bitterness hops
- Hold boil for "c" minutes
- Add aroma hops with _"c - d"_  minutes left on boil
- Whirlpool
- Chill
- Transfer to fermenter

### Fermenter

- Measure og
- Pitch yeast

## Software

### About

The idea of the final version of this software must have and intuitive GUI and allow the user to take control over the brewing process at any given time. Although the user may take control at any given point the software should be able to execute all procedures, beginning to end, requiring user assistance only to load raw materials.

This system should also be able to perform multiples brews in a day without user assistance. Cleaning itself between brew. With proper timing of brews a total of 6 brews in a day should be possible without major trouble.

The financial model of this project is yet to be defined thus major philosophy changes may occur. At the moment both DIY and Ready to go approaches are being considered. For pro systems the idea of partnership with a brewhouse equipment factory is also on the table.

A major difficulty I'm having is how to conciliate the all the brewhouse layouts in a concise software

The final version of this software should to be able to understand a recipe, get all its parameters and automatically:

1. Mill the grains, to its parameters.
    - Being so it needs to be capable of start and stop the milling process while being aware of the ammount that was already milled.
2. Without assistence measure and separate the correct quantity of hops for each adition and add it to the hop dispenser
3. Perform a cip operation
4. Volumetrically add water to spec.
    - Meaning, it measures the flow through sensor and multiplies by time
5. Heat the water to strike temp
    - To do so it needs to know the temperature of the water and grains so that after all grains have been dumped it is exactly on "mashclear in" temperature.
6. Dump the grains to Mash Tun.
    - Via grain auger, mechanical of pneumatic
7. Control temperature in mash in process
8. Control ramp time to Mash Out
9. Control Mash Out temperature
10. Control flow of lautering to recirculate a total of # times
11. Control input and output of lauter tun on sparge. Input = Output.
12. Release all hop aditions
    - And on begginning of boil start a timer
13. Control Boil
14. Start and monitor whirlpool.
15. Chill and transfer to fermenter
16. Remove Spent Grains
17. Start Another brew.

### Technologies

- NodeJS
  - Johnny Five
  - raspi-io
  - Node Red
- Electron

- TypeScript

### Steps (Classes?)

- Parser
- Configure controllers (Arduinos)
- Get Device Adressess
- Configure Serial Communication
- Set Inputs and Outputs pins
- Sensors (Address):
  - Weight Sensor returns weight:Number
  - Flow meter  returns flow:Number
  - Temperature Sensor returns temp:Number
  - Volume Sensor returns vol:Number
- Outputs (Address, Output):
  - Dispenser returns state:Number
  - Relay
  - Hop Dispenser
  - Valve
    - 2 Way Valve
    - 3 Way Valve L
    - 3 Way Valve T
  - Pump Esc
  - Heater PID

## Hardware

### Main Controller

- Raspberry Pi

### Grain handling

- Controller (Arduino)
- Malt Silo #1
  - Weight Sensor
  - Butterfly valve
- Malt Silo #2
  - Weight Sensor
  - Butterfly valve
- Malt Mill
  - Relay
- Grain auger
  - Pneumatic (Air Blower) (positive pressure?)
  - Relay

### Hops

- Controller (Arduino)
- Weight Sensor
- Dispenser

### Water Storage and Filtering

- Controller (Arduino)
- Water Filter
  - Flow meter (Before Carbon Filter)
- Cold Water Tank
  - Temperature sensor
  - Volume Sensor
  - Valve
- Hot Water Tank
  - Temperature sensor
  - Volume Sensor
  - Heater PID
  - Valve
- Pump ESC

### Brewhouse

#### Mash tun

- Controller (Arduino)
- Temperature sensor (Input)
- Temperature sensor (Kettle)
- Main Valve
- Temperature sensor (Output)
- Pump ESC
- 3 Way Valve (To Cip & 2nd Valve)
- 3 Way Valve (To MT & LT)
- Heater PID
- Flow Meter

#### Lauter Tun

- Controller (Arduino)
- Flow Meter
- Temperature sensor (Input)
- Temperature sensor (Kettle)
- Main Valve
- Flow Meter
- Temperature sensor (Output)
- Pump ESC
- 3 Way Valve (To Cip & 2nd Valve)
- 3 Way Valve (To LT & BK)
- Heater PID

### Boil Kettle

- Controller (Arduino)
- Flow Meter
- Temperature sensor (Input)
- Temperature sensor (Kettle)
- Main Valve
- Temperature sensor (Output)
- Pump ESC
- 3 Way Valve (To Cip & 2nd Valve)
- 3 Way Valve (To BK & CCT)
- Heater PID

### Refriferation

- Controller (Arduino)
- Plate Chiller #1
  - 4 Temperature Sensor
  - Flow Meter
- Plate Chiller #2
- Glycol Chiller

### Fermenting

- Controller (Arduino)
- CCT
- Yeast Storage
- Yeast Dispenser

## Bill Of Material

### Eletronics

- Arduino Mega (x1)
- RaspBerry Pi (x1)
- Flow Meter (X6)
- Temperature Sensor (x13)
- Weight Sensor (x5)
- Valve Actuator (x13)
- ESC (x5)
- Relay (x2)
- Solid State Relay (x3)
- Heater ULWD (x3)
- Heater (x3)

### Hidraulics

- Check Valve (x9)
- 3-Way Valve (x6)
- Modulating 2-Way Valve (x4)
- 2-Way Valve (x14)
- ButterFly Valve (x2)
- Pump (x5)
- Plate Chiller (x2)
- Filter

### Misc

- Malt Mill
- Motor
- Air Blower
- Filter Body (x4)
- Filter (x4)
  
## Others

Ph da agua
Dureza da agua
Iodo pos mosturação
Sg pre-fervura
Og pos fervura
Fg Pos fermentação