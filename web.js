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
	var head='text/html';
	console.log(request.url.slice(-3));
	switch(request.url.slice(-3)){
		case '.js':head='text/javascript';break;
		case 'css':head='text/css';break;
		case 'png':head='image/png';break;
		case 'ico':head='image/x-icon';break;
		case 'ogg':head='audio/ogg';break;
		case 'ebm':head='video/webm';break;
	}
	response.contentType(head);
	answer = fs.readFileSync(htmlfile).toString();
	response.end(answer);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

