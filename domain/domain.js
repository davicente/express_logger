/**
 * Created by dvicente@solidgear.es on 10/11/2017
 */
'use strict'


var logger = require('../logger');
var db = require('../db/db');

exports.loggerTest = function () {
    logger.debug('Log from domain');
    return db.loggerTest()
    .then(() => {
        logger.info('Log from domain after doing things in DB')
    });
}