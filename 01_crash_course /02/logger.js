const EventEmitter = require('events');

var url = 'http://mylogger.io/log'

class Logger extends EventEmitter  {
    log(massage){
        console.log(massage);

        this.emit('massageLogged' , {id: 1, url:'http:// ' });
    }
}

module.exports=Logger;