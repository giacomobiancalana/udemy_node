/*
 *  Primary file for the API
 */

// DEPENDENCIES
const http = require('http');
const url = require('url');

// DEFINE WHAT THE SERVER DOES (the server should respond to all requests with a string)
var server = http.createServer((req, res) => {

  // GET THE URL AND PARSE IT
  var parsedUrl = url.parse(req.url, true);
  //true is for calling the query string module, so we are using two modules at once.

  // GET THE PATH
  var path = parsedUrl.pathname;  //untrimmed path of the user request
  var trimmedPath = path.replace(/^\/+|\/+$/g,'');

  // SEND THE RESPONSE
  res.end("Helloooo, new server hereee!!\n");
  // res.end(JSON.stringify(parsedUrl));

  // LOG THE REQUEST PATH 
  console.log("Request is received on path: " + trimmedPath + "\n");

});
//other comments on http.createServer
//server is a server object
/* everytime someone hits localhost:3000, the callback function with (req, res) as parameters gets called,
 * and everytime req and res are different objects, with lots of different information.
 * 
 */


// START THE (WEB?) SERVER, AND HAVE IT LISTEN ON PORT 3000
server.listen(3000, ()=> {
  console.log("Server is listening at port 3000 . . .")
});