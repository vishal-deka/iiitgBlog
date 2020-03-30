'use strict';
var express = require('express'),
  app = express(),
  cors = require('cors'),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  Blog = require('./api/models/Models');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/blogsDB');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./api/routes/Routes'); //importing route
routes(app); //register the route

app.listen(port);




console.log('IIITG Blog RESTful API server started on: ' + port);
