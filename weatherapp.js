const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

// Main page
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Server-side API requests can be handled here

let port = process.env.PORT || 8002;
app.listen(port, function () {
  console.log("Server running on port 8002");
});
