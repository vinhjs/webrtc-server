var express = require('express');
var app = express();
var fs = require('fs');
var ExpressPeerServer = require('peer').ExpressPeerServer;
var options = {
    debug: true
}
app.get('/', function(req, res, next) { res.send('Hello world!'); });


var server = require('https').createServer({
    key: fs.readFileSync('./certificates/key.pem', 'utf8'),
    cert: fs.readFileSync('./certificates/cert.pem', 'utf8')
}, app);
var peerserver = ExpressPeerServer(server, options);

app.use('/peerjs', peerserver);

server.listen(5000);

// ========
