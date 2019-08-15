// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// emitter.on('Uygoning Madinabonu ',function(){
//      console.log('MADINABANU ESHITDI');
// });


// emitter.emit('Uygoning Madinabonu ')
const EventEmitter = require('events');


const Logger = require('./logger');
const logger = new Logger();

logger.on('massageLogged',(arg) => {
    console.log('Listener called ', arg);
});

logger.log('massage');