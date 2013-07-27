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
	answer = fs.readFileSync(htmlfile).toString();
	response.send(answer);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

