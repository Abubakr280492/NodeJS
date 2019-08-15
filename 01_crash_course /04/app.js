const http = require('http');

const server = http.createServer((req,res) =>{
if(req.url ==='/'){
    res.write('Hey whats going on ');
    res.end();
}

if (req.url==='/api/courses'){
    res.write(JSON.stringify([1,2,3]));
    res.end();
}

});




server.listen(2000);


console.log('Listeng on port 2000...');