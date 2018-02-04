var express = require('express');

var app = express();
var server = app.listen(4000, function() {
  console.log('Listening 4000 ports.');
});

app.use(express.static('public'));
