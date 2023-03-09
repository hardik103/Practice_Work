var events = require('events');
var object = new events.EventEmitter();

var myVar1 = function () {console.log('I hear a scream1!');}
var myVar2 = function () {console.log('I hear a scream2!');}
var myVar3 = function () {console.log('I hear a scream3!');}

object.on('event 1', myVar1);
object.on('event 1', myVar3);
object.on('event 1', myVar2);

console.log(object.eventNames());
object.emit('event 1');

//prepend
object.prependListener('event 1', (stream) => {
    console.log('someone connected!');
  });

object.off('event 1', myVar1);
object.emit('event 1');

console.log(object.listenerCount('event 1'));

object.on('event 2', number => {
    console.log(`started ${number}`);
});

object.emit('event 2', 23);
object.emit('event 1');
object.emit('event 1');

object.on('event 2', function (start, end)  {
    console.log(`started from ${start} to ${end}`);
});
  
object.emit('event 2',100,234);
object.emit('event 1');
  
console.log(object.getMaxListeners());
console.log(object.setMaxListeners(20));
console.log(object.getMaxListeners());

object.emit('event 1');

console.log(object.eventNames());
console.log(object.getMaxListeners());