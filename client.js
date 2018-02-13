var net = require('net');
var t, count = 0;
var client = new net.Socket();
client.connect(4660, '35.196.77.215', function() {
	console.log('Connected');
	client.write('Hello');
	t = setInterval(echoHello, 1000);
});

function echoHello(){
	client.write("__cl_hello");
	count = count + 1;
}
client.on('data', function(data) {
	console.log('Received: ' + data);
	if(count > 10){
		clearInterval(t);
		client.destroy();
	}
});

client.on('close', function() {
	console.log('Connection closed');
});