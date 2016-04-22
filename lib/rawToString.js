/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:48
 */

"use strict";

/**
 * 
 * @param buffer
 * @returns {*}
 */
module.exports = function(buffer){
    if(!buffer){ return ''; }

    return buffer.toString('utf-8')
        .replace(/^[\r\n]+|[\r\n]+$/g, '');
};