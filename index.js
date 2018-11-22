var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;
var options = {
    debug: true
}
app.get('/', function(req, res, next) { res.send('Hello world!'); });


var server = require('http').createServer(app);
var peerserver = ExpressPeerServer(server, options);

app.use('/peerjs', peerserver);

server.listen(5000);

// ========
