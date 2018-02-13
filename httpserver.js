var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function(request, response){
	var pathname = url.parse(request.url).pathname;
	console.log("request for " + pathname + " received.");
	fs.readFile(pathname.substr(1), function(err, data){
		if(err){
			console.log(err);
			response.writeHead(404, {'Content-type': 'text/html'});
		}else{
			response.writeHead(200, {'Content-type': 'text/html'});
			response.write(data.toString());
		}
		response.end();
	});

    if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () {
            var post = qs.parse(body);
			console.log(post);
            // use post['blah'], etc.
        });
    }
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');
var qs = require('querystring');