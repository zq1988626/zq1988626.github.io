
let express = require('express');
let app = express();
let fs = require('fs');
let https = require('https');
let http = require('http');
let privateKey  = fs.readFileSync('server.key', 'utf8');
let certificate = fs.readFileSync('server.crt', 'utf8');
let cert = {key: privateKey, cert: certificate};
let httpServer = http.createServer(app);
let httpsServer = https.createServer(cert, app);
app.get('/', function(req, res) {
    if(req.protocol === 'https') {
    res.send('https require');
    } else {
    res.send('http require');
    }
});
httpServer.listen(7000, function() {
  console.log('HTTP Server is running');
});
httpsServer.listen(7001, function() {
console.log('HTTPS Server is running');
});