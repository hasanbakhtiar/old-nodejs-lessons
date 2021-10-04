const events = require('events');
const eventEmitter = new events.EventEmitter();

// eventEmitter.on('hello', ()=>{
//     console.log("hello node");
// })
eventEmitter.on('hello', (object)=>{ //once bir defe uchundur.
    // console.log(`hello ${name}`);
    console.log(`hello ${object.name1} ${object.surname}`);
})


const name = "Hasan";
eventEmitter.emit('hello',{name1:'Hasan', surname:"Bakhtiar"});
eventEmitter.emit('hello',{name1:'Hasan', surname:"Bakhtiar"});
eventEmitter.emit('hello',{name1:'Hasan', surname:"Bakhtiar"});
// eventEmitter.emit('hello');
// eventEmitter.emit('hello');
// eventEmitter.emit('hello');

// setTimeout(()=>{
// eventEmitter.emit('hello');

// },1000);