/// <reference path="../typings/tsd.d.ts" />

var bodyParser = require('body-parser'),
    express = require('express'),
    favicon = require('serve-favicon'),
    cookieParser = require('cookie-parser');

import Dog from './classes/Dog';
import Animal from './interfaces/Animal';
import FoodType from './enums/FoodType';


var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, ()=> {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/test', (req, res)=> {
    var doge:Dog = new Dog(1, FoodType.Carnivorous, true, 'Doge');
    res.send(200, doge);
});
