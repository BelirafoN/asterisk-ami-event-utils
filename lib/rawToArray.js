/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:31
 */

"use strict";

const bufferToObject = require('./rawToObject');

/**
 * 
 * @param buffer
 * @returns {*}
 */
module.exports = function(buffer){
    let event = bufferToObject(buffer);
    return Object.keys(event).reduce((arr, curr) => {
        arr.push([curr, event[curr]]);
        return arr;
    }, []);
};