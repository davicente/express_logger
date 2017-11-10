/**
 * Created by dvicente@solidgear.es on 10/11/2017
 */
'use strict'


var domain = require('../domain/domain');
var logger = require('../logger');

// Create the app and listen for API requests
exports.assignRoutes = function (app) {
    app.get('/logger_test', loggerTest);
}


var loggerTest = function (req, res, next) {
    logger.debug('Log from routes');
    domain.loggerTest()
    .then(() => {
        logger.debug('Log from routes after manage request');
        res.send();
    });
}