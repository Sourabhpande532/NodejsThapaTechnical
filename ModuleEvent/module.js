// Events Module
// node.js has a built-in module, called "Events"
// where you can create-, fire-, and listen for- your own events
// Eg. 1- REgistering for the event to be fired only one time using one
// Eg. 2- create an event emitter instance and register a couple of callback
// Eg. 3- Registering for the event with callback parameters

// const EventEmitter = require('events');

// const event = new EventEmitter();

// event.on( "say my Name", ()=>{
//     console.log("My name is mention above list")
// })

// event.on( "say my Name", ()=>{
//     console.log("My name is mention above list that name is Bhavna Mule")
// })

// event.on( "say my Name", ()=>{
//     console.log("My name is mention above list that name is sumitra Padole")
// })

// // this onClick here belew emit
// event.emit("say my Name");


// Eg 3. callback parameter.....

const EventEmit = require("events")

const Bhahubali = new EventEmit();

Bhahubali.on("CheckPage", (sc, Masg)=>{
    console.log(`Status code is ${sc} and the page is ${Masg} `);
})

Bhahubali.emit("CheckPage", 200, "ok");

    
