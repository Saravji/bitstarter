var fs = require('fs');
var express = require('express');
var answer;
var app = express.createServer(express.logger());


app.get('/', function(request, response) {
    response.send("utf-8", fs.readFileSync('index.html')).toString()
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

