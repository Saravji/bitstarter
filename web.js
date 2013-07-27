var fs = require('fs');
var express = require('express');
var answer;
var app = express.createServer(express.logger());
var htmlfile;

app.get('/', function(request, response) {
	htmlfile = 'index.html';
	answer = fs.readFileSync(htmlfile).toString();
	response.send(answer);
});

app.get(/^(.+)$/, function(request, response) {
	htmlfile = request.url.substring(1);
	var head={'Content-Type':'text/html; charset=UTF-8'}
	console.log(request.url.slice(-3));
	switch(request.url.slice(-3)){
		case '.js':head={'Content-Type':'text/javascript; charset=UTF-8'};break;
		case 'css':head={'Content-Type':'text/css; charset=UTF-8'};break;
		case 'png':head={'Content-Type':'image/png'};break;
		case 'ico':head={'Content-Type':'image/x-icon'};break;
		case 'ogg':head={'Content-Type':'audio/ogg'};break;
		case 'ebm':head={'Content-Type':'video/webm'};break;
	}
	response.writeHead(200,head);
	answer = fs.readFileSync(htmlfile).toString();
	response.end(answer);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

