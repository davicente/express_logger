/**
 * Created by dvicente@solidgear.es on 10/11/2017
 */
'use strict'

var logger = require('../logger');


exports.loggerTest = function () {
    logger.debug('Log from db');
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            logger.info('Log from db after doing things');
            resolve();
        }, 5000);
    })
}