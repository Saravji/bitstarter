var fs = require('fs');
var express = require('express');
var url = require('url');
var answer;
var app = express.createServer(express.logger());

function (request, response) {
		var htmlfile = 'index.html';
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
	
	app.get('/', function server (request, response) {
		answer = fs.readFileSync(htmlfile).toString();
		response.send(answer);
	});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

