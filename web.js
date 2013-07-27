var fs = require('fs');
var express = require('express');
var answer;
var app = express.createServer(express.logger());
var htmlfile = 'index.html';

app.set

app.get('/', function(request, response) {
		console.log("Request: " + request.url);
		answer = fs.readFileSync(htmlfile).toString();
		response.send(answer);
	});

app.get(function(request, response) {
		htmlfile  = '20130721.html';
		console.log("Request: " + request.url);
		answer = fs.readFileSync(htmlfile).toString();
		response.send(answer);
	});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

