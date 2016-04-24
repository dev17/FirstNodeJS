var express = require('express'); //requre a module called express
var app = express(); // 
var http = require('http').Server(app); // http server
var io = require('socket.io')(http); // 
var port = process.env.PORT || 3000; // listen on connection for incoming socket
app.get('/', function (req, res) {
    // pass the index.html
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});
http.listen(port, function () {
    console.log('listening on ' + port);
});