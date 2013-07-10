var fs = require('fs');
var express = require('express');
var answer;
var app = express.createServer(express.logger());

//fs.readFileSync('index.html', function (err, data) {
//  if (err) throw err;
/ / answer = data;
//  console.log(data);
//}):

app.get('/', function(request, response) {
  response.send('back to test');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

