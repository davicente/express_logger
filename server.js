/**
 * Created by dvicente@solidgear.es on 10/11/2017
 */
'use strict'

var mkdirp = require('mkdirp');
var express = require('express');
var routes = require('./routes/routes');
var logger = require('./logger');

var app = express();

var createFolder = function(foldername) {
    mkdirp(foldername, function (err) {
        if (err) {
            logger.error(err);
        }
        else {
            logger.info("The folder: " + foldername + " was created");
        }
    });
};

// LOGS
var uuid = require('node-uuid');
var createNamespace = require('continuation-local-storage').createNamespace;
var myRequest = createNamespace('my request');
// initialize log folder
createFolder("./logs");


// Run the context for each request. Assign a unique identifier to each request
app.use(function(req, res, next) {
    myRequest.run(function() {
        myRequest.set('reqId', uuid.v1());
        next();
    });
});


routes.assignRoutes(app);

// run server
app.listen(4444);


