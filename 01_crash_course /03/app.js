const http = require('http');

const server = http.createServer();

server.on('connection', (socket)=> {
    console.log('New connection going on...');
});


server.listen(3000);


console.log('Listeng on port 3000...');