/**
 * Developer: Alex Voronyansky <belirafon@gmail.com>
 * Date: 14.04.2016
 * Time: 18:54
 */

"use strict";

const CRLF = '\r\n';

/**
 * 
 * @param event
 * @returns {*}
 */
module.exports = function(event){
    if(!event){ return ''; }
    return event.toString().replace(/^[\r\n]+|[\r\n]+$/g, '') + CRLF.repeat(2);
};