var fs = require('fs');
var express = require('express');
var answer;
var app = express.createServer(express.logger());


app.get('/', function(request, response) {
//  response.send('back to test');
    response.send(fs.readFileSync('index.htm')).toString()
// {
//      if (err) throw err;
//      console.log(data);
//      var buffer = new Buffer ();
//        response.send(buffer.toString(
//      answer = 
//      response.send(answer);
 //   });

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

