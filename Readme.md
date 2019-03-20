# A RGB Blinking Led light with NodeJs and the RaspberryPi

## Description  

A RGB Blinking Led Light which can be controlled via the internet by port forwarding

## Technology 
 
The project was developed using: 
- [Raspberry Pi](http://raspberrypi.org) - [raspbian](https://www.raspbian.org/), Pir sensor
- [Node.js](https://nodejs.org/en/) - for the main application 
 
## Project components 

### Hardware 

```javascript

var Gpio = require("onoff").Gpio;
var LED1 = new Gpio(2, "out");
var LED2 = new Gpio(4, "out");
var LED3 = new Gpio(17, "out");


```
- Raspberry Pi 
  - I used *Model B+* with *Raspbian* - any model should be Ok, just be careful with the Gpio configuration pin mappings, they can differ 
 

- Led 
  - I used a RGB Led

 
