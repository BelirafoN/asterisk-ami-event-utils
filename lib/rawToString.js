/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:48
 */

"use strict";

/**
 * 
 * @param rawEventData
 * @returns {*}
 */
module.exports = function(rawEventData){
    if(!rawEventData){ return ''; }

    return rawEventData.toString('utf-8')
        .replace(/^[\r\n]+|[\r\n]+$/g, '');
};