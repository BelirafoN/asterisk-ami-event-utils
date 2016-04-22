/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:54
 */

"use strict";

const CRLF = '\r\n';

/**
 * 
 * @param str
 * @returns {*}
 */
module.exports = function(str){
    if(!str){ return ''; }
    return str.toString().replace(/^[\r\n]+|[\r\n]+$/g, '') + CRLF.repeat(2);
};