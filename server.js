/*
 * IoT Project Series #1
 *
 * A RGB Blinking Led Light controlled via the internet
 *
 * This is a code that runs on node.js
 * and is used to control the Raspberry Pi it connectS to
 *
 * @author Nwachukwu Chibuike <chibuikenwachukwu2016@gmail.com>
 * @copyright 2018 IoT Project Series

*/

var http = require("http"),
	port = 8088;

var server = http.createServer(function(request, response) {
 
    if (request.url === '/trigger' && request.method == 'GET') {

//The following code is made to make the light blink in three random colours

	var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
	var LED1 = new Gpio(2, 'out'); //use GPIO pin 2, and specify that it is output
	var LED2 = new Gpio(4,'out');	//use GPIO pin 4, and specify that it is output
	var LED3 = new Gpio(17,'out');//use GPIO pin 17, and specify that it is output
	var state = 2; 
// The state variable is used hold the current state of the bulb,
//  so we can know which colour to show

	var blinkInterval = setInterval(blinkLED, 250); //run the blinkLED function every 250ms

	function blinkLED() { 
	/*
		@desc This function is used to blink the RGB LED LIGHT in the three different 
			  	colours: Red, Green and Blue
	*/
		if(state == 2){
	
			if (LED1.readSync() === 0) { //check the pin state, if the state is 0 (or off)
			    LED1.writeSync(1); //set pin state to 1 (turn LED1 on)
  
  			} else {
  	
    			LED1.writeSync(0); //set pin state to 0 (turn LED1 off)
   			    state = 4;
  
 	 		}
		}else if(state == 4){

			if (LED2.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    			LED2.writeSync(1); //set pin state to 1 (turn LED2 on)
  
  			} else {
  
    			LED2.writeSync(0); //set pin state to 0 (turn LED2 off)
    			state = 6;
  
  			}
		}else{
	
			if (LED3.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    			LED3.writeSync(1); //set pin state to 1 (turn LED3 on)
  
  			} else {
  
    			LED3.writeSync(0); //set pin state to 0 (turn LED3 off)
    			state = 2;
  
  			}
		}

  }

function endBlink() { //function to stop blinking
  clearInterval(blinkInterval); // Stop blink intervals
  LED1.writeSync(0); // Turn LED1 off
  LED1.unexport(); // Unexport GPIO to free resources
  LED2.writeSync(0); // Turn LED2 off
  LED2.unexport(); // Unexport GPIO to free resources
  LED3.writeSync(0); // Turn LED3 off
  LED3.unexport(); // Unexport GPIO to free resources

}

setTimeout(endBlink, 15000); //stop blinking after 15 seconds




//the blinking code ends here

	 response.writeHeader(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      });

      response.write('{ "status": true }');
      response.end();

	}else{

		response.writeHeader(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      });

      response.write('{ "status": true }');
      response.end();
	}
});

 server.listen(port);
  console.log("Server Running on " + port + ".\nLaunch http://localhost:" + port);


