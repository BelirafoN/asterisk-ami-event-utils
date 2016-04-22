/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:32
 */

"use strict";

const bufferToObject = require('./rawToObject');

/**
 * 
 * @param buffer
 */
module.exports = function(buffer){
    return JSON.stringify(bufferToObject(buffer));
};