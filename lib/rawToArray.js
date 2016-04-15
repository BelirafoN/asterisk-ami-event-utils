/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:31
 */

"use strict";

const toObject = require('./rawToObject');

/**
 * 
 * @param rawEventData
 * @returns {*}
 */
module.exports = function(rawEventData){
    let event = toObject(rawEventData);
    return Object.keys(event).reduce((arr, curr) => {
        arr.push([curr, event[curr]]);
        return arr;
    }, []);
};