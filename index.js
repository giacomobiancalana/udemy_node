const http = require('http');

//creating the server
var server = http.createServer((req, res) => (
  res.end("Helloooo, new server hereee!!\n")
));

server.listen(3000, ()=> (
  console.log("Server is listening at port 3000 . . .")
));