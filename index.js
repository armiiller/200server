var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/', function (req, res) {
  res.status(200).end();
  console.log(req.body);
});

var port = process.env.PORT || 3005;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
