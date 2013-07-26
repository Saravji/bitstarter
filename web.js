var fs = require('fs');
var express = require('express');
var answer;
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var htmlfile ='index.html';
	
	console.log(request.path);
    answer = fs.readFileSync(htmlfile).toString();
    response.send(answer);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

