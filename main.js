var os = require("os");
console.log('endianness: ' + os.endianness());
console.log('type: ' + os.type());
console.log('platform: ' + os.platform());
console.log('total memory: ' + parseFloat(os.totalmem()/1000000).toFixed(2) + ' MB');
console.log('free memory: ' + parseFloat(os.freemem()/1000000).toFixed(2) + ' MB');
var dns = require('dns');
dns.lookup('www.google.com', function onLookup(err, address, family){
	console.log('address: ', address);
	dns.reverse(address, function(err, hostname){
		if(err){
			console.log(err.stack);
		}
		console.log('reverse for ' + address + ': ' + JSON.stringify(hostname));
	});
});