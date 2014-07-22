var express = require('express'),
  ejs = require('ejs'),
  bodyParser = require('body-parser'),
  app = express();

// create a faux database
var articles = [];

app.use(bodyParser.urlencoded());
app..use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('site/index');
});

app.listen(3000, function() {
  console.log("SERVER STARTED ON local");
});