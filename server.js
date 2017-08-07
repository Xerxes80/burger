var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controller.js');
app.use('/', router);


app.listen(port, function(){
    console.log("App is listening on port: %s", port);
});