

// NOPE not using this, going to use hard coded PHP nonsense

var watson = require('watson-developer-cloud');


// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {

  var authorization = new watson.AuthorizationV1({
	  username: 'b77079c8-42eb-44b1-9ee0-b737f74ab747',
	  password: 'dBDx4iUwDZb4',
	  url: watson.TextToSpeechV1.URL
	});

	authorization.getToken(function (err, token) {
	  if (!token) {
	    console.log('error:', err);
	  } else {
	    response.writeHead(200, {"Content-Type": "text/plain"});
	    response.end(token);
	  }
	});
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");