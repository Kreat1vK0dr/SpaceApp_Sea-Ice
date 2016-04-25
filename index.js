var express = require('express'),
    exphbs = require('express-handlebars');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var metrics = require('./lib/render');
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
        extended: false
    }));

app.use(bodyParser.json());

io.on('connection', function(socket){
    socket.on('location_received', function(msg){
      console.log('message: ' + msg);
    });
  });

app.get("/location/:locID", metrics.showLocation);

  app.get('/', function (req, res) {
     res.redirect("/home");
  });

  app.get('/home', function (req, res) {
    res.render('index');
  });

// app.get("/", metrics.showLocation);

// app.get('/', function (req, res) {
//    res.redirect("/home");
//    res.render('index.html');
// });
//start the server

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});

// var port = process.env.port || 3007;
// http.listen(port, function(){
//     console.log('running at port :' , port)
// });

// var server = app.listen(3000, function () {
//
//  var host = server.address().address;
//  var port = server.address().port;
//
//  console.log('Example app listening at http://%s:%s', host, port);
//
// });
