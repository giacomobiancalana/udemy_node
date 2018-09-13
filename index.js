/*
 *  Primary file for the API
 */

// domande: 
// 1) è possibile visualizzare l'oggetto request sulla pagina web o sul terminale??

// DEPENDENCIES
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

// DEFINE WHAT THE SERVER DOES
var server = http.createServer((req, res) => {

  // GET THE URL AND PARSE IT
  var parsedUrl = url.parse(req.url, true);
  //true is for calling the query string module, so we are using two modules at once.

  // GET THE PATH
  var path = parsedUrl.pathname;  //untrimmed path of the user request
  var trimmedPath = path.replace(/^\/+|\/+$/g,'');

  //GET THE QUERY STRING AS AN OBJECT
  var queryStringObject = parsedUrl.query;

  //GET THE HTTP METHOD
  var method = req.method.toLowerCase();

  //GET THE HEADERS AS AN OBJECT
  var headers = req.headers;

  //GET THE PAYLOAD, IF ANY
  var decoder = new StringDecoder('utf-8');
  var buffer = '';
  
  // this one below is the handler of the 'data' event
  req.on('data', (data) => {
    buffer += decoder.write(data);
  });
  // "  'req.on('data', ... " is for when the request emits the event 'data', so when the http request has a payload.
  // if there's no payload, then at least the 'end' event described below will get called anyway.
  // this means that as this data is streaming in, every time is streamed in a little piece, the request object 
  // emits the data event and decoded with the utf-8 format.

  // this one below is the handler of the 'end' event
  req.on('end', () => {
    buffer += decoder.end();

    //
    // SEND THE RESPONSE ( this is what will be displayed in the html)
    res.end("Hello World\n"); 
    //res.end(JSON.stringify(parsedUrl));

    // LOG THE REQUEST PATH 
    console.log("Request received with this payload: " + buffer);
    // console.log("Request is received on path: " + trimmedPath + " with this method: " + method + " with these queries string parameters:" , queryStringObject, "\n");
    //console.log(req);
  });

  
});
//other comments on http.createServer
//server is a server object
/* 
 *everytime someone hits localhost:3000, the callback function with (req, res) as parameters gets called,
 * and everytime req and res are different objects, with lots of different information.
 */


// START THE (WEB?) SERVER, AND HAVE IT LISTEN ON PORT 3000
server.listen(3000, ()=> {
  console.log("Server is listening at port 3000 . . .\n")
});