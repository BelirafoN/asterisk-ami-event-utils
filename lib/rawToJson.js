/**
 * Developer: BelirafoN
 * Date: 14.04.2016
 * Time: 18:32
 */

"use strict";

const toObject = require('./rawToObject');

/**
 * 
 * @param rawEventData
 */
module.exports = function(rawEventData){
    return JSON.stringify(toObject(rawEventData));
};