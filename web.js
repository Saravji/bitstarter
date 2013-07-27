var fs = require('fs');
var express = require('express');
var answer;
var app = express.createServer(express.logger());
var htmlfile = 'index.html';

app.use(function(request, respond, next){
	if (!request.url = '/') {htmlfile = request.url;}
	console.log("Request: " + request.url);
	next();
	});

app.get(function(request, response) {
	answer = fs.readFileSync(htmlfile).toString();
	response.send(answer);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

