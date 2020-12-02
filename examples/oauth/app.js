


let express = require('express');
let fs = require('fs');
let https = require('https');
let http = require('http');
let oauth = require('./router/oauth');

let cert = {
    key: fs.readFileSync('server.key', 'utf8'), 
    cert: fs.readFileSync('server.crt', 'utf8')
};
let app = express();

let httpServer = http.createServer(app);
let httpsServer = https.createServer(cert, app);

app.use(oauth);
app.use(express.static("./public"));

app.get('/', function(req, res) {
    if(req.protocol === 'https') {
        res.send('https require');
    } else {
        res.send('http require');
    }
});

httpServer.listen(7000, function() {
  console.log('HTTP Server is running at http://localhost:7000');
});

httpsServer.listen(443, function() {
    console.log('HTTPS Server is running at https://localhost');
});