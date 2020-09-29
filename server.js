// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api/timestamp/', (req, res) => {
    res.json({ unix: Date.now(), utc: new Date().toUTCString()});
})

app.get('/api/timestamp/:date_string', (req, res) => {
    let dateString = req.params.date_string;
    let unix;

    if (dateString.match(/\d{5,}/)) unix = parseInt(dateString);
    else unix = Date.parse(dateString);
    
    const utc = new Date(unix).toUTCString();
    
    if ( !unix || !utc ) res.json({ error: "Invalid Date" });
    res.json({ unix, utc });
});

// listen for requests :)
var listener = app.listen(3001, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
