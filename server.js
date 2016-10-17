// require the express package
var express = require('express');
var http = require('http');

// start the express server and put that info
// in a variable called 'app'
var app = express();
var server = http.Server(app);
// require socket io
var io = require('socket.io')(server);

app.use(express.static('client'));

// when a browser connect
io.on('connection', function(socket) {
    socket.on('message', function(msg) {
        console.log("Message received, ", msg);
        io.emit('message', msg);
    });
    // when someone disconnects
    socket.on('disconnect', function(){
    io.emit('message', "User disconnected");
  });
});

// start the server for the given config
server.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server is now running");
});