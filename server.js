var express = require('express'),
    http = require('http');

var app = express(),
    port = process.env.PORT || 3000,
    server;

// Servce static assets
app.use('/dist',  express.static(__dirname + '/dist'));

// Routes - catch-all to return index.html
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

server = http.createServer(app);
server.listen(port, function() {
  console.log('app listenting on port: ' + port);
});
