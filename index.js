/*
 *  Primary file for the API
 */

//Dependencies
const http = require('http');

//define what the server does (the server should respond to all requests with a string)
var server = http.createServer((req, res) => (
  res.end("Helloooo, new server hereee!!\n")
));  //server is a server object

//Start the server, and had it listen on port 3000
server.listen(3000, ()=> (
  console.log("Server is listening at port 3000 . . .")
));