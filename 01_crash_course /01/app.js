// function oddiyfuncsiya(name){
//     console.log('salom '+ name);
// }

// //oddiyfuncsiya('Madina'); 
// console.log(window);



//console.log(a);

// var oshxona = require('./logger');

// oshxona.log('tuxum')


// const os = require('os')

// var tuliqxotira = os.totalmem();
// var bushjoy = os.freemem();

// console.log(' TULIQ XOTIRA :' + tuliqxotira);
// console.log('BUSH joy ' + bushjoy);

 const fs = require('fs');

//   const madina = fs.readdirSync('./');
//   console.log(madina)

fs.readdir('$', function(err, files) {
    if (err) console.log('Xoto', err)
    else console.log('javob', files);

});