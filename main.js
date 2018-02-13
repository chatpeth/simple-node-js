var os = require("os");
console.log('endianness: ' + os.endianness());
console.log('type: ' + os.type());
console.log('platform: ' + os.platform());
console.log('total memory: ' + parseFloat(os.totalmem()/1000000).toFixed(2) + ' MB');
console.log('free memory: ' + parseFloat(os.freemem()/1000000).toFixed(2) + ' MB');
