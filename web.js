var fs = require('fs');
var express = require('express');
var answer;
var app = express.createServer(express.logger());
var htmlfile;

app.set

app.get('/', function(request, response) {
		htmlfile  = 'index.html';
		console.log("Request: " + request.url);
		answer = fs.readFileSync(htmlfile).toString();
		response.send(answer);
	});

app.get('/20130721.html', function(request, response) {
		htmlfile  = '20130721.html';
		answer = fs.readFileSync(htmlfile).toString();
		response.send(answer);
	});

app.get('/20130714.html', function(request, response) {
		htmlfile  = '20130714.html';
		answer = fs.readFileSync(htmlfile).toString();
		response.send(answer);
	});

	
	
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

